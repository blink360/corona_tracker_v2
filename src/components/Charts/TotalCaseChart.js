import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts'
import { Card } from 'react-bootstrap';
import styles from '../../assets/css/dashboard.module.scss';
import { Typography } from '@material-ui/core';

function TotalCaseChart(props) {
    return (
        <Card id={styles.card} border="dark">
            <Card.Body>
                <Card.Title><Typography variant="h6" align="center">Total Cases</Typography></Card.Title>
                <ResponsiveContainer width="98%" height={300}>
                    <LineChart data={props.data}>
                        <XAxis dataKey="date" />
                        <YAxis dataKey="totalCases" />
                        <Tooltip/>
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="totalCases" stroke="#E01C1C" />
                    </LineChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    )
}

export default TotalCaseChart
