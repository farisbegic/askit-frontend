import React from 'react';
import {Button, Container} from "react-bootstrap";
import {Form, Formik} from "formik";
import Input from "../components/Input/Input";
import {useMutation} from "react-query";
import question from "../services/question";
import {useNavigate} from "react-router-dom";

const AddQuestion = () => {
    const navigate = useNavigate();

    const handleSubmit = useMutation(async (value) => {
        const response = await question.addQuestion(value)
        if (response.status === 200) {
            navigate(-1)
        }
    })

    return (
        <Container fluid="sm" className="mt-4">
            <h3>Add a question</h3>
            <Formik initialValues={{
                description: ''
            }}
                    onSubmit={(value) => {
                        handleSubmit.mutate(value)
                    }}>
                <Form className="mt-4">
                    <Input
                        label="Question"
                        name="description"
                        type="text"
                        placeholder="Enter your question"
                    />

                    <Button type="submit" className="mt-2">
                        Add question
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
};

export default AddQuestion;