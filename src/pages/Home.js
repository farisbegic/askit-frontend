import React from 'react';
import LatestQuestions from "../components/LatestQuestions/LatestQuestions";
import MostAnswers from "../components/MostAnswers/MostAnswers";
import HotQuestions from "../components/HotQuestions/HotQuestions";

const Home = () => {
    return (
        <div className="my-4">
            <LatestQuestions />
            <MostAnswers />
            <HotQuestions />
        </div>
    );
};

export default Home;