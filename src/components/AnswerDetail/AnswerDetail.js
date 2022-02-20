import React, {useContext} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import moment from "moment";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';
import {useMutation, useQueryClient} from "react-query";
import answer from "../../services/answer";

const AnswerDetail = ({answer:answerData}) => {
    const { id } = useContext(AuthenticationContext);
    const queryClient = useQueryClient();

    const deleteAnswer = useMutation(async (value) => {
        await answer.deleteAnswer(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries("question")
        }
    })

    return (
        <Card className="my-3">
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>{`${answerData.creator?.firstName} ${answerData.creator?.lastName}`}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{answerData?.description}</Card.Subtitle>
                    </Col>
                    <Col>
                        <Card.Text>{moment(answerData?.createdAt).fromNow()}</Card.Text>
                        { answerData.creator.id === id && (
                            <Card.Subtitle>
                                <AiOutlineEdit
                                    size={22}
                                    style={{cursor: "pointer"}}
                                />{' '}
                                <AiOutlineDelete
                                    size={20}
                                    style={{cursor: "pointer"}}
                                    onClick={() => deleteAnswer.mutate(answerData.id)}
                                />
                            </Card.Subtitle>
                        )}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default AnswerDetail;