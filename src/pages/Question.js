import React from 'react';
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import QuestionDetail from "../components/QuestionDetail/QuestionDetail";
import SaveAnswer from "../components/SaveAnswer/SaveAnswer";
import AnswerDetail from "../components/AnswerDetail/AnswerDetail";

const Question = () => {
    const { id: questionId } = useParams();

    return (
        <Container fluid="sm" className="mt-4">
            <QuestionDetail questionId={questionId}/>
            <AnswerDetail questionId={questionId} />
            <SaveAnswer questionId={questionId}/>
        </Container>
    );
};

export default Question;