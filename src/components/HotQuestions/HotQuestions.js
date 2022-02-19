import React, {useEffect, useState} from 'react';
import question from "../../services/question";
import {Container, Table} from "react-bootstrap";

const HotQuestions = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        question.getHotQuestions()
            .then(response => {
                setQuestions(response.data)
            })
    }, [])

    return (
        <Container fluid="sm" className="py-4">
            <h3>Hot Questions</h3>
            { questions && (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Like Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    { questions.map(question => (
                        question.count > 0 && (
                            <tr key={question.id}>
                                <td>{question.description}</td>
                                <td>{question.count}</td>
                            </tr>
                        )
                    ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default HotQuestions;