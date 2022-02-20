import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import moment from "moment";

const AnswerDetail = ({answer}) => {
    return (
        <Card className="my-3">
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>{`${answer.creator?.firstName} ${answer.creator?.lastName}`}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{answer?.description}</Card.Subtitle>
                    </Col>
                    <Col>
                        <Card.Text>{moment(answer?.createdAt).fromNow()}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default AnswerDetail;