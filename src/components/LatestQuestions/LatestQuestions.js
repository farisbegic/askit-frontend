import React, {useState} from 'react';
import question from "../../services/question";
import { Container } from "react-bootstrap";
import { useQuery } from 'react-query'
import QuestionList from "../QuestionList/QuestionList";

const LatestQuestions = () => {
    const size = 3;
    const [page, setPage] = useState(1);

    const { isLoading, data } = useQuery(['latestQuestions', page], async () =>
        await question.getLatestQuestions(`page/${page}/size/${size}`)
    );

    return (
        <Container fluid="sm" className="py-4">
            <h3 className="pb-3">Latest Questions</h3>
            { !isLoading && (
                <QuestionList questions={data.data} page={page} setPage={setPage} />
            )}
        </Container>
    );
};

export default LatestQuestions;