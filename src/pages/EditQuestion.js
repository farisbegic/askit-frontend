import React from 'react';
import {Container} from "react-bootstrap";
import question from "../services/question";
import EditFeature from "../components/EditFeature/EditFeature"

const EditQuestion = () => {
    return (
        <Container fluid="sm" className="mt-4">
            <h3>Edit question</h3>
            <EditFeature service={question.editQuestion} feature="question" label="Question"/>
        </Container>
    );
};

export default EditQuestion;