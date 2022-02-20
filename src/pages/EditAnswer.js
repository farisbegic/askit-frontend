import React from 'react';
import {Form, Formik} from "formik";
import Input from "../components/Input/Input";
import {Button, Container} from "react-bootstrap";
import {useMutation} from "react-query";
import answer from "../services/answer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const EditAnswer = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleEdit = useMutation(async (value) => {
        const response = await answer.editAnswer(value)
        if (response.status === 200) {
            navigate(-1);
        }
    })

    return (
        <Container fluid="sm" className="mt-4">
            <h3>Edit answer</h3>
            <Formik initialValues={{
                description: state.description
            }}
                    onSubmit={(value) => {
                        handleEdit.mutate({
                            answerId: state.id,
                            description: value.description
                        })
                    }}>
                <Form className="mt-4">
                    <Input
                        label="Answer"
                        name="description"
                        type="text"
                        placeholder="Enter your answer"
                    />

                    <Button type="submit">
                        Edit answer
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
};

export default EditAnswer;