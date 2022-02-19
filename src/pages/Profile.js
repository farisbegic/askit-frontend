import React from 'react';
import {useQuery} from "react-query";
import user from "../services/user";
import {Button, Container, ListGroup, ListGroupItem} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const { isLoading, data } = useQuery("profileInformaton", async () =>
        await user.getUser()
    );

    return (
        <Container fluid="sm" className="mt-4">
            { !isLoading && (
                <ListGroup>
                    <ListGroupItem>ID: {data.data.id}</ListGroupItem>
                    <ListGroupItem>Name: {data.data.firstName}</ListGroupItem>
                    <ListGroupItem>Surname: {data.data.lastName}</ListGroupItem>
                    <ListGroupItem>Email: {data.data.email}</ListGroupItem>
                </ListGroup>
            )}
            <Button className="mt-4 mx-1" onClick={() => {navigate("/edit-profile")}}>Edit profile</Button>
            <Button className="mt-4 mx-1" onClick={() => {navigate("/edit-password")}}>Edit password</Button>
        </Container>
    );
};

export default Profile;