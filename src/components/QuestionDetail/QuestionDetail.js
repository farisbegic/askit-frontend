import React from 'react';
import {Card} from "react-bootstrap";
import moment from "moment";
import Reactions from "../Reactions/Reactions";

const QuestionDetail = ({question}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{question.creator.firstName + " " + question.creator.lastName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{moment(question.createdAt).fromNow()}</Card.Subtitle>
                <Card.Text>{question.description}</Card.Text>
                <Reactions id={question.id} likes={question.likes} dislikes={question.dislikes} hasLiked={question.hasLiked} hasDisliked={question.hasDisliked}/>
            </Card.Body>
        </Card>
    );
};

export default QuestionDetail;