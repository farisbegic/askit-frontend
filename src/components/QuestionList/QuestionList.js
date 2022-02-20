import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import moment from "moment";
import {Link} from "react-router-dom";

const QuestionList = ({ questions, page, setPage}) => {
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                { questions.map((question, index) => (
                    <Col key={index} className="my-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{question.User.firstName + " " + question.User.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{moment(question.createdAt).fromNow()}</Card.Subtitle>
                                <Card.Text>{question.description}</Card.Text>
                                <Link to={`/question/${question.id}`}>View More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button onClick={() => setPage(page+1)}>Load More</Button>
        </>
    );
};

export default QuestionList;