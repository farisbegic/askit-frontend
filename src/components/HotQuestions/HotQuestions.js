import React from 'react';
import question from "../../services/question";
import {Container, Table} from "react-bootstrap";
import {useQuery} from "react-query";

const HotQuestions = () => {

    const { isLoading, data } = useQuery("hotQuestions", () =>
        question.getHotQuestions()
    );

    return (
        <Container fluid="sm" className="py-4">
            <h3 className="pb-3">Hot Questions</h3>
            { !isLoading && (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Like Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    { data.data.map(question => (
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