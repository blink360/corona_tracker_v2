import React from 'react'
import { Card } from 'react-bootstrap';
import calculateRate from '../../assets/javascript/calculateRate.js';
import calculateGrowthRate from '../../assets/javascript/calculateGrowthRate.js';
import styles from '../../assets/css/dashboard.module.scss';
import { Typography } from '@material-ui/core';

function Rate(props) {
    return (
        <Card className={styles.card_rate} id={styles.card} border="dark">
            <Card.Body>
                <Card.Title>
                    <Typography variant="h6" align="center">
                        {props.type === "DR" ? "Fatality Rate"
                            : (props.type === "RR" ? "Recovery Rate"
                                : "Daily Growth Rate")}
                    </Typography>
                </Card.Title>
                {props.type === "GR" ?
                    <Typography variant="h2" id={styles.card_body_rate}>{calculateGrowthRate(props.data)}<Typography variant="caption">%</Typography></Typography>
                    :
                    <Typography variant="h2" id={styles.card_body_rate}>{calculateRate(props.data, props.totalData)}<Typography variant="caption">%</Typography></Typography>
                }
            </Card.Body>
        </Card>
    )
}

export default Rate
