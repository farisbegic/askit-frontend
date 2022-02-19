import React from 'react';
import {Container} from "react-bootstrap";
import LatestQuestions from "../components/LatestQuestions/LatestQuestions";

const Home = () => {
    return (
        <Container fluid="sm" className="mt-4">
            <LatestQuestions />
        </Container>
    );
};

export default Home;