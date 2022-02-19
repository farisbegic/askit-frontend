import React from 'react';
import {Button, Container} from "react-bootstrap";
import {Form, Formik} from "formik";
import Input from "../components/Input/Input";
import {editPasswordValidation} from "../utils/validations/editPassword";
import {useMutation} from "react-query";
import user from "../services/user";

const EditPassword = () => {

    const handleEdit = useMutation(async (value) => {
        await user.editPassword(value)
    })
    return (
        <Container fluid="sm" className="mt-4">
            <h3>Edit password</h3>
                <Formik initialValues={{
                    password: "",
                    confirmPassword: ""
                }}
                        validationSchema={editPasswordValidation}
                        onSubmit={(value) => {
                            handleEdit.mutate(value)
                        }}>
                    <Form className="mt-4">
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />

                        <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                        />
                        { handleEdit.isError && (
                            <p className="text-danger">Passwords don't match</p>
                        )}

                        { handleEdit.isSuccess && (
                            <p className="text-success">Password updated successfully</p>
                        )}
                        <Button type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Formik>
            </Container>
    );
};

export default EditPassword;