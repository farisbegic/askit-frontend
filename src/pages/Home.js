import React from 'react';
import LatestQuestions from "../components/LatestQuestions/LatestQuestions";
import MostAnswers from "../components/MostAnswers/MostAnswers";
import HotQuestions from "../components/HotQuestions/HotQuestions";
import Search from "../components/Search/Search";

const Home = () => {
    return (
        <div className="my-4">
            <Search />
            <LatestQuestions />
            <MostAnswers />
            <HotQuestions />
        </div>
    );
};

export default Home;