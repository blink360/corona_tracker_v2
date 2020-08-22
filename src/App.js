import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import * as datetime from 'date-and-time';
import Dashboard from './components/Dashboard/Dashboard';
import Rate from './components/Dashboard/Rate';
import NewCaseChart from './components/Charts/NewCaseChart';
import TotalCaseChart from './components/Charts/TotalCaseChart';
import Header from './components/Header&Footer/Header';
import Footer from './components/Header&Footer/Footer';

function App() {
  let [covidData, setCovidData] = useState([]);
  let [displayData, setDisplayData] = useState([]);

  let fetchData = async () => {
    try {
      let response = await axios.get("https://data.nepalcorona.info/api/v1/covid/timeline")
        .catch(
          () => {
            setTimeout(() => { fetchData() }, 2000)
          }
        )
      let { data } = response;

      let currentDate = datetime.format(new Date(), "YYYY-MM-DD");//get date for today
      let previousDate = datetime.format((d => new Date(d.setDate(d.getDate() - 1)))(new Date()), "YYYY-MM-DD");//get date for yesterday

      let dataToDisplay = data.filter((a) => { return (a.date === currentDate || a.date === previousDate) });

      setCovidData(data);
      setDisplayData(dataToDisplay);
    }
    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchData();
  }, [1]);

  return (
    <Container fluid >
      <Header/>
      <Row>
        <Col sm={12}>
          <Dashboard data={displayData} />
        </Col>
      </Row>
      {displayData.length > 1 ?
        <>
          <Row>
            <Col sm={12} md={4}>
              <Rate type="GR" data={covidData.filter((a) => {return (a.totalCases > 0)})} />
            </Col>
            <Col sm={12} md={4}>
              <Rate type="RR" data={displayData[1].totalRecoveries || 0} totalData={displayData[1].totalCases || 0} />
            </Col>
            <Col sm={12} md={4}>
              <Rate type="DR" data={displayData[1].totalDeaths || 0} totalData={displayData[1].totalCases || 0} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <NewCaseChart data={covidData.filter((a) => { return a.totalCases > 0 && a.newCases > 10 }).slice(50)} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <TotalCaseChart data={covidData.filter((a,i) => { return (a.totalCases > 0 && (i%5 === 0 || i === covidData.length)) })}/>
            </Col>
          </Row>
        </>
        : ""}
        <Footer/>
    </Container>
  );
}

export default App;
