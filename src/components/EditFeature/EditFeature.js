import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {Button} from "react-bootstrap";
import {Form, Formik} from "formik";
import Input from "../Input/Input"

const EditFeature = (props) => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleEdit = useMutation(async (value) => {
        const response = await props.service(value)
        if (response.status === 200) {
            navigate(-1);
        }
    })

    return (
        <Formik initialValues={{
            description: state.description
        }}
                onSubmit={(value) => {
                    handleEdit.mutate({
                        id: state.id,
                        description: value.description
                    })
                }}>
            <Form className="mt-4">
                <Input
                    label={props.label}
                    name="description"
                    type="text"
                    placeholder={`Enter your ${props.feature}`}
                />

                <Button type="submit" className="mt-2">
                    Edit {props.feature}
                </Button>
            </Form>
        </Formik>
    );
};

export default EditFeature;