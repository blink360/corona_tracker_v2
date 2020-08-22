import React from 'react'
import { BarChart, XAxis, CartesianGrid, Bar, Tooltip,ResponsiveContainer, YAxis } from 'recharts';
import { Card } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import styles from '../../assets/css/dashboard.module.scss';

function NewCaseChart(props) {
    return (
        <Card id={styles.card} border="dark">
            <Card.Body>
                <Card.Title><Typography variant="h6" align="center">New Cases Per Day</Typography></Card.Title>
                <ResponsiveContainer width="98%" height={300}>
                    <BarChart width={500} height={250} data={props.data}>
                        <XAxis dataKey="date" />
                        <YAxis dataKey="newCases"/>
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar dataKey="newCases" fill="#E01C1C" />
                    </BarChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    )
}

export default NewCaseChart
