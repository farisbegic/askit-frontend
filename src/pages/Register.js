import React, {useContext} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {registerValidation} from "../utils/validations/register";
import { Formik, Form } from "formik";
import Input from "../components/Input/Input";
import {useMutation} from "react-query";
import authentication from "../services/authentication";
import {AuthenticationContext} from "../contexts/AuthenticationContextProvider";

const Register = () => {
    const { setAccessToken, setName, setRejected } = useContext(AuthenticationContext);

    const handleRegistration = useMutation(async (value) => {
        const response = await authentication.register(value)

        if (response.status === 200) {
            setAccessToken(response.data.accessToken);
            setName(response.data.name)
            setRejected(false)
        }
    })

    return (
        <Container fluid="sm" className="mt-4">
            <h3>Register</h3>
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={registerValidation}
            onSubmit={(value) => {
                handleRegistration.mutate(value)
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

                    <Row>
                        <Col>
                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </Col>
                        <Col>
                            <Input
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                            />
                        </Col>
                    </Row>
                    {  handleRegistration.isError && (
                        <p className="text-danger">You either entered used mail or didn't fill all input fields.</p>
                    ) }
                    <Button type="submit">
                        Sign up
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
};

export default Register;