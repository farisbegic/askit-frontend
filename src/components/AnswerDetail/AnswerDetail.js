import React, {useContext} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import moment from "moment";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';
import {useMutation, useQuery, useQueryClient} from "react-query";
import answer from "../../services/answer";
import {useNavigate} from "react-router-dom";
import Reactions from "../Reactions/Reactions";
import answerRating from "../../services/answerRating";

const AnswerDetail = ({ questionId }) => {

    const { id } = useContext(AuthenticationContext);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isLoading, data } = useQuery(["questionAnswers", questionId], async () =>
        await answer.getQuestionAnswers(questionId)
    )

    const deleteAnswer = useMutation(async (value) => {
        await answer.deleteAnswer(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries("questionAnswers")
        }
    })

    return (
        <>
            { !isLoading && data.data.map(answer => (
                <Card className="my-3" key={answer.id}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>{`${answer.User.firstName} ${answer.User.lastName}`}</Card.Title>
                                <Card.Text className="mb-2">Answer: {answer.description}</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text>{moment(answer.createdAt).fromNow()}</Card.Text>
                                { answer.User.id == id && (
                                    <Card.Subtitle>
                                        <AiOutlineEdit
                                            size={22}
                                            style={{cursor: "pointer"}}
                                            onClick={() => navigate(`/edit-answer`, { state: answer})}
                                        />{' '}
                                        <AiOutlineDelete
                                            size={22}
                                            style={{cursor: "pointer"}}
                                            onClick={() => deleteAnswer.mutate(answer.id)}
                                        />
                                    </Card.Subtitle>
                                )}
                            </Col>
                        </Row>
                        <Reactions id={answer.id} likes={answer.likes} dislikes={answer.dislikes} hasLiked={answer.hasLiked} hasDisliked={answer.hasDisliked} service={answerRating} refetch="questionAnswers"/>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default AnswerDetail;