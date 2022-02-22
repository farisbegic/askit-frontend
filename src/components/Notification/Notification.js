import React, {useContext, useEffect, useState} from 'react';
import { io } from "socket.io-client";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";
import {Col, Row, Toast} from "react-bootstrap";
import moment from "moment";
import {useNavigate} from "react-router-dom";

const Notification = () => {
    const navigate = useNavigate();
    const [notification, setNotification] = useState("");
    const [show, setShow] = useState(false);

    const toggleNotification = () => {
        setNotification("");
        setShow(!show)
    }

    const { accessToken } = useContext(AuthenticationContext);

    useEffect(() => {
        if (accessToken) {
            const socket = io(process.env.REACT_APP_API_URL)

            socket.on("connect", () => {
                socket.emit("join", accessToken);
            })

            socket.on("new-answer", (notification) => {
                setNotification(notification)
                setShow(true);
            })
        }
    }, [accessToken])

    return (
        <Toast show={show} onClose={toggleNotification} style={{position: "fixed", bottom: "50px", right: "73px", zIndex: "10"}}>
            <Toast.Header>
                <strong className="me-auto">New Answer</strong>
                <small>{moment(notification.createdAt).fromNow()}</small>
            </Toast.Header>
            <Row>
                <Col>
                    <Toast.Body>{notification.description}</Toast.Body>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Toast.Body>
                        <p className="text-decoration-underline" onClick={() => navigate(`/question/${notification.question}`)} style={{cursor: "pointer"}}>View</p>
                    </Toast.Body>
                </Col>
            </Row>
        </Toast>
    );
};

export default Notification;