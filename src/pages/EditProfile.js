import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {editProfileValidation} from "../utils/validations/editProfile";
import {Form, Formik} from "formik";
import Input from "../components/Input/Input";
import {useMutation, useQuery} from "react-query";
import user from "../services/user";

const EditProfile = () => {

    const { isLoading, data } = useQuery("profileInformaton", async () =>
        await user.getUser()
    );

    const handleEdit = useMutation(async (value) => {
        await user.editProfile(value)
    })

    return (
        <Container fluid="sm" className="mt-4">
            <h3>Edit profile</h3>
            { !isLoading && (
                <Formik initialValues={{
                    firstName: data.data.firstName,
                    lastName: data.data.lastName,
                    email: data.data.email
                }}
                        validationSchema={editProfileValidation}
                        onSubmit={(value) => {
                            handleEdit.mutate(value)
                        }}>
                    <Form className="mt-4">
                        <Row>
                            <Col>
                                <Input
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </Col>
                            <Col>
                                <Input
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    placeholder="Enter your surname"
                                />
                            </Col>
                        </Row>

                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                        />

                        { handleEdit.isError && (
                            <p className="text-danger">Email already exists</p>
                        )}

                        { handleEdit.isSuccess && (
                            <p className="text-success">Information changed successfully</p>
                        )}
                        <Button type="submit">
                            Edit information
                        </Button>
                    </Form>
                </Formik>
            )}
        </Container>
    );
};

export default EditProfile;