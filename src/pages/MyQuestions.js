import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import QuestionList from "../components/QuestionList/QuestionList";
import {useQuery} from "react-query";
import question from "../services/question";
import {useNavigate} from "react-router-dom";

const MyQuestions = () => {
    const size = 20;
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const { isLoading, data } = useQuery(['myQuestions', page], async () =>
        await question.getMyQuestions(`page/${page}/size/${size}`)
    );

    return (
        <Container fluid="sm" className="py-4">
            <Row className="py-4">
                <Col>
                    <h3>MyQuestions</h3>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button onClick={() => navigate("/add-question")}>Add question</Button>
                </Col>
            </Row>
            { !isLoading && (
                <QuestionList questions={data.data} page={page} setPage={setPage}/>
            )}
        </Container>
    );
};

export default MyQuestions;