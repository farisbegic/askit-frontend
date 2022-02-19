import React, {useEffect, useState} from 'react';
import question from "../../services/question";
import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import moment from "moment";

const LatestQuestions = () => {
    const size = 3;
    const [page, setPage] = useState(1);
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        question.getLatestQuestions(`page/${page}/size/${size}`)
            .then(response => {
                setQuestions(response.data);
            })
    }, [page])

    if (!questions) {
        return (
            <div>Loading..</div>
        )
    }

    return (
        <Container fluid="sm" className="py-4">
            <h3>Latest Questions</h3>
            { questions && (
                questions.map((question, index) => (
                    <Card key={index} className="my-3">
                        <Card.Body>
                            <Card.Title>{question.User.firstName + " " + question.User.lastName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{moment(question.createdAt).fromNow()}</Card.Subtitle>
                            <Card.Text>{question.description}</Card.Text>
                            <Link to="/">View More</Link>
                        </Card.Body>
                    </Card>
                ))
            )}
            <Button onClick={() => setPage(page+1)}>Load More</Button>
        </Container>
    );
};

export default LatestQuestions;