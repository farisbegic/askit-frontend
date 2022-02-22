import React from 'react';
import {Container} from "react-bootstrap";
import EditFeature from "../components/EditFeature/EditFeature"
import answer from "../services/answer";

const EditAnswer = () => {
    return (
        <Container fluid="sm" className="mt-4">
            <h3>Edit answer</h3>
            <EditFeature service={answer.editAnswer} feature="answer" label="Answer" />
        </Container>
    );
};

export default EditAnswer;