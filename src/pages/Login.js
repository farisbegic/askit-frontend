import React, {useContext} from 'react';
import {Form, Formik} from "formik";
import {Button, Container} from "react-bootstrap";
import Input from "../components/Input/Input";
import {loginValidation} from "../utils/validations/login";
import {useMutation} from "react-query";
import authentication from "../services/authentication";
import {AuthenticationContext} from "../contexts/AuthenticationContextProvider";
import {Link} from "react-router-dom";

const Login = () => {
    const { setResponse } = useContext(AuthenticationContext);

    const handleLogin = useMutation(async (value) => {
        const response = await authentication.login(value)

        if (response.status === 200) {
            setResponse(response);
        }
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
                    <p className="text-secondary mt-3">Still don't have an account? <Link to="/register">Register</Link></p>
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