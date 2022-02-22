import React, {useContext} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import moment from "moment";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import {useMutation, useQueryClient} from "react-query";
import question from "../../services/question";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";

const QuestionList = ({ questions, page, setPage}) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const { id } = useContext(AuthenticationContext)

    const deleteQuestion = useMutation(async (value) => {
        await question.deleteQuestion(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries("myQuestions")
        }
    })

    console.log(id);
    console.log(questions);

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                { questions.map((question, index) => (
                    <Col key={index} className="my-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{question.User.firstName + " " + question.User.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{moment(question.createdAt).fromNow()}</Card.Subtitle>
                                <Card.Text>{question.description}</Card.Text>
                                { question.User.id == id && (
                                    <Card.Subtitle className="my-2">
                                        <AiOutlineEdit
                                            size={22}
                                            style={{cursor: "pointer"}}
                                            onClick={() => navigate(`/edit-question`, { state: question })}
                                        />{' '}
                                        <AiOutlineDelete
                                            size={22}
                                            style={{cursor: "pointer"}}
                                            onClick={() => deleteQuestion.mutate(question.id)}
                                        />
                                    </Card.Subtitle>
                                )}
                                <Link to={`/question/${question.id}`}>View More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            { questions.length > 0 && (
                <Button onClick={() => setPage(page+1)}>Load More</Button>
            )}
        </>
    );
};

export default QuestionList;