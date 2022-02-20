import React from 'react';
import {Card} from "react-bootstrap";
import moment from "moment";
import Reactions from "../Reactions/Reactions";
import {useQuery} from "react-query";
import question from "../../services/question";
import questionRating from "../../services/questionRating";

const QuestionDetail = ({ questionId }) => {

    const { isLoading, data } = useQuery(["question", questionId], async () =>
        await question.getQuestion(questionId)
    )

    return (
        <Card>
            { !isLoading && (
                <Card.Body>
                    <Card.Title>{data.data.User.firstName + " " + data.data.User.lastName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{moment(data.data.createdAt).fromNow()}</Card.Subtitle>
                    <Card.Text>Question: {data.data.description}</Card.Text>
                    <Reactions id={data.data.id} likes={data.data.likes} dislikes={data.data.dislikes} hasLiked={data.data.hasLiked} hasDisliked={data.data.hasDisliked} service={questionRating} refetch="question"/>
                </Card.Body>
            )}
        </Card>
    );
};

export default QuestionDetail;