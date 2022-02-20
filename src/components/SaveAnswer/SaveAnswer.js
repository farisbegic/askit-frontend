import React from 'react';
import {Form, Formik} from "formik";
import Input from "../Input/Input";
import {useMutation, useQueryClient} from "react-query";
import answer from "../../services/answer";

const SaveAnswer = ({questionId}) => {
    const queryClient = useQueryClient();

    const handleSave = useMutation(async (value) => {
        await answer.saveAnswer(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries("question")
        }
    })

    return (
        <Formik initialValues={{
            description: ''
        }}
                onSubmit={(value, {resetForm}) => {
                    handleSave.mutate({
                        questionId: questionId,
                        description: value.description
                    })
                    resetForm()
                }}>
            <Form>
                <Input
                    name="description"
                    type="text"
                    placeholder="Enter your answer"
                />
            </Form>
        </Formik>
    );
};

export default SaveAnswer;