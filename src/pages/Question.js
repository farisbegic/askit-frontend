import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import question from "../services/question";
import {Container} from "react-bootstrap";
import QuestionDetail from "../components/QuestionDetail/QuestionDetail";
import AnswerDetail from "../components/AnswerDetail/AnswerDetail";
import SaveAnswer from "../components/SaveAnswer/SaveAnswer";

const Question = () => {
    const { id: questionId } = useParams();

    const { isLoading, data } = useQuery(["question", questionId], async () =>
        await question.getQuestion(questionId)
    )

    return (
        <Container fluid="sm" className="mt-4">
            { !isLoading && (
                <>
                    <QuestionDetail question={{
                        id: data.data.id,
                        description: data.data.description,
                        likes: data.data.likes,
                        dislikes: data.data.dislikes,
                        hasLiked: data.data.hasLiked,
                        hasDisliked: data.data.hasDisliked,
                        createdAt: data.data.createdAt,
                        creator: data.data.User
                    }}/>

                    { data.data.Answers.map(answer => (
                        <AnswerDetail key={answer.id} answer={{
                            id: answer.id,
                            description: answer.description,
                            likes: answer.likes,
                            dislikes: answer.dislikes,
                            hasLiked: answer.hasLiked,
                            hasDisliked: answer.hasDisliked,
                            createdAt: answer.createdAt,
                            creator: answer.User
                        }}/>
                    ))}

                    <SaveAnswer questionId={questionId}/>
                </>
            )}
        </Container>
    );
};

export default Question;