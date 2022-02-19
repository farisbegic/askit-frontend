import React from 'react';
import {Form, Formik} from "formik";
import {registerValidation} from "../utils/validations/register";
import {Button, Col, Container, Row} from "react-bootstrap";
import Input from "../components/Input/Input";
import {loginValidation} from "../utils/validations/login";
import {useMutation} from "react-query";
import authentication from "../services/authentication";

const Login = () => {

    const handleLogin = useMutation(async (value) => {
        await authentication.login(value)
    })

    return (
        <Container fluid="sm" className="mt-4">
            <h3>Login</h3>
            <Formik initialValues={{
                email: "",
                password: ""
            }}
                    validationSchema={loginValidation}
                    onSubmit={(value) => {
                        handleLogin.mutate(value)
                    }}>
                <Form className="mt-4">
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />

                    {  handleLogin.isError && (
                        <p className="text-danger">Your email or password are entered incorrectly.</p>
                    ) }

                    <Button type="submit">
                        Login
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
};

export default Login;