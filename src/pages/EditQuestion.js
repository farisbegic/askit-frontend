import React from 'react';
import {Form, Formik} from "formik";
import Input from "../components/Input/Input";
import {Button, Container} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import question from "../services/question";

const EditQuestion = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleEdit = useMutation(async (value) => {
        const response = await question.editQuestion(value)
        if (response.status === 200) {
            navigate(-1);
        }
    })

    return (
        <Container fluid="sm" className="mt-4">
            <h3>Edit question</h3>
            <Formik initialValues={{
                description: state.description
            }}
                    onSubmit={(value) => {
                        handleEdit.mutate({
                            questionId: state.id,
                            description: value.description
                        })
                    }}>
                <Form className="mt-4">
                    <Input
                        label="Question"
                        name="description"
                        type="text"
                        placeholder="Enter your question"
                    />

                    <Button type="submit">
                        Edit question
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
};

export default EditQuestion;