import React from 'react'
import { Card } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import styles from '../../assets/css/dashboard.module.scss';
import AddIcon from '@material-ui/icons/Add';
function Dashboard(props) {
    return (
        <>
            {props.data.length > 0 ?
                <Card id={styles.card} border="dark">
                    <Card.Body>
                        <div id={styles.card_body}>
                            <div className={styles.card_body_items}>
                                <div>
                                    <Typography variant="h2"  style={{ color: "red" }} >{props.data[1].totalCases}</Typography>
                                    <Typography variant="h5" paragraph>Confirmed</Typography>
                                    <Typography variant="h5" paragraph style={{ color: "red" }}><AddIcon />{props.data[1].newCases } <Typography variant="caption"> new cases</Typography></Typography>
                                </div>
                            </div>
                            <div className={styles.card_body_items}>
                                <Typography variant="h2"  style={{ color: "green" }}>{props.data[1].totalRecoveries}</Typography>
                                <Typography variant="h5" paragraph>Recovered</Typography>
                            </div>
                            <div className={styles.card_body_items}>
                                <div>
                                    <Typography variant="h2"  style={{ color: "gray" }} >{props.data[1].totalDeaths}</Typography>
                                    <Typography variant="h5" paragraph>Deaths</Typography>
                                    <Typography variant="h5" paragraph style={{ color: "gray" }}><AddIcon />{props.data[1].newDeaths}<Typography variant="caption"> new deaths</Typography></Typography>
                                </div>
                            </div>
                        </div>
                        <div id={styles.card_body_lastUpdateDate}>
                            <Typography style={{ color: "gray" }}>Last Updated: {props.data[1].date}</Typography>
                            <Typography style={{ color: "gray" }}>Source: https://data.nepalcorona.info/</Typography>
                        </div>
                    </Card.Body>
                </Card>
                : ''}
        </>
    )
}

export default Dashboard
