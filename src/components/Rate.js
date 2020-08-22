import React from 'react'
import { Card } from 'react-bootstrap';
import calculateRate from '../assets/javascript/calculateRate.js';
import styles from '../assets/css/dashboard.module.scss';
import { Typography } from '@material-ui/core';

function Rate(props) {
    return (
        <Card id={styles.card} border="dark">
            <Card.Body>
                <Card.Title><Typography variant="h6" align="center">{props.type === "DR" ? "Fatality Rate" : "Recovery Rate"}</Typography></Card.Title>
                <Typography variant="h2" id={styles.card_body_rate}>{calculateRate(props.data, props.totalData)}<Typography variant="caption">%</Typography></Typography>
            </Card.Body>
        </Card>
    )
}

export default Rate
