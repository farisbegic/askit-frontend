import React, {useContext} from 'react';
import {Form, Formik} from "formik";
import {Button, Container} from "react-bootstrap";
import Input from "../components/Input/Input";
import {loginValidation} from "../utils/validations/login";
import {useMutation} from "react-query";
import authentication from "../services/authentication";
import {AuthenticationContext} from "../contexts/AuthenticationContextProvider";

const Login = () => {
    const { setId, setAccessToken, setName, setRejected } = useContext(AuthenticationContext);

    const handleLogin = useMutation(async (value) => {
        const response = await authentication.login(value)

        if (response.status === 200) {
            setAccessToken(response.data.accessToken);
            setId(response.data.id)
            setName(response.data.name)
            setRejected(false);
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