import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import QuestionList from "../components/QuestionList/QuestionList";
import {useQuery} from "react-query";
import question from "../services/question";

const MyQuestions = () => {
    const size = 3;
    const [page, setPage] = useState(1);

    const { isLoading, data } = useQuery(['myQuestions', page], async () =>
        await question.getMyQuestions(`page/${page}/size/${size}`)
    );

    return (
        <Container fluid="sm" className="py-4">
            <h3 className="pb-3">MyQuestions</h3>
            { !isLoading && (
                <QuestionList questions={data.data} page={page} setPage={setPage} />
            )}
        </Container>
    );
};

export default MyQuestions;