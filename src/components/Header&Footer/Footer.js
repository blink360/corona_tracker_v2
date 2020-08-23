import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import cough from '../../assets/images/covid_symptoms/cough.svg'
import fever from '../../assets/images/covid_symptoms/fever.svg'
import breathing from '../../assets/images/covid_symptoms/breathing.svg'
import social from '../../assets/images/covid_precautions/social-distancing.svg'
import handwash from '../../assets/images/covid_precautions/hand-wash.svg'
import mask from '../../assets/images/covid_precautions/mask.svg'
import { Typography } from '@material-ui/core'
import styles from '../../assets/css/footer.module.scss';

function Footer() {
    return (
        <>
            <Row>
                <Col sm={12} md={6}>
                    <Card id={styles.card} border="dark">
                        <Card.Body>
                            <Typography variant="h6" paragraph>Symptoms</Typography>
                            <Row>
                                <Col xs={4}>
                                    <div>
                                        <Image className={styles.images} src={cough} fluid />
                                        <Typography variant="body1">Dry Cough</Typography>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div>
                                        <Image className={styles.images} src={fever} fluid />
                                        <Typography variant="body1">High Fever</Typography>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div>
                                        <Image className={styles.images} src={breathing} fluid />
                                        <Typography variant="body1">Difficulty Breathing</Typography>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} >
                    <Card id={styles.card} border="dark">
                        <Card.Body>
                            <Typography variant="h6" paragraph>Precautions</Typography>
                            <Row>
                                <Col xs={4}>
                                    <div>
                                        <Image className={styles.images} src={social} fluid />
                                        <Typography variant="body1">Social Distancing</Typography>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div>
                                        <Image className={styles.images} src={handwash} fluid />
                                        <Typography variant="body1">Washing Hands</Typography>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div>
                                        <Image className={styles.images} src={mask} fluid />
                                        <Typography variant="body1">Wearing Mask in Public</Typography>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Footer
