import React, {useState} from 'react';
import question from "../../services/question";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import moment from "moment";
import { useQuery } from 'react-query'

const LatestQuestions = () => {
    const size = 3;
    const [page, setPage] = useState(1);

    const { isLoading, data } = useQuery('latestQuestions', () =>
        question.getLatestQuestions(`page/${page}/size/${size}`)
    );

    return (
        <Container fluid="sm" className="py-4">
            <h3 className="pb-3">Latest Questions</h3>
            <Row xs={1} md={2} className="g-4">
                { !isLoading && (
                    data.data.map((question, index) => (
                        <Col key={index} className="my-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{question.User.firstName + " " + question.User.lastName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{moment(question.createdAt).fromNow()}</Card.Subtitle>
                                    <Card.Text>{question.description}</Card.Text>
                                    <Link to="/">View More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
            <Button onClick={() => setPage(page+1)}>Load More</Button>
        </Container>
    );
};

export default LatestQuestions;