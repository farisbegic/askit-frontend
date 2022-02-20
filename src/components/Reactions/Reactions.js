import React from 'react';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai';
import {Col, Row} from "react-bootstrap";
import questionRating from "../../services/questionRating";

const Reactions = (props) => {

    const handleLike = async () => {
        if (props.hasLiked === "1") {
            await questionRating.deleteRating(props.id)
        } else if (props.hasDisliked === "1") {
            await questionRating.editRating({
                questionId: props.id,
                isLike: true
            })
        } else {
            await questionRating.saveRating({
                questionId: props.id,
                isLike: true
            })
        }
    }

    const handleDislike = async () => {
        if (props.hasDisliked === "1") {
            await questionRating.deleteRating(props.id)
        } else if (props.hasLiked === "1") {
            await questionRating.editRating({
                questionId: props.id,
                isLike: false
            })
        } else {
            await questionRating.saveRating({
                questionId: props.id,
                isLike: false
            })
        }
    }

    return (
        <>
            <Row>
                <Col sm="auto">
                    {props.hasLiked === "1" ? (
                        <AiFillLike size={24} onClick={() => handleLike()} />) : (
                            <AiOutlineLike size={24} onClick={() => handleLike()} />)}
                    {props.likes}
                </Col>
                <Col sm="auto">
                    {props.hasDisliked === "1" ? (
                        <AiFillDislike size={24} onClick={() => handleDislike()}/>) : (
                            <AiOutlineDislike size={24} onClick={() => handleDislike()} />)}
                    {props.dislikes}
                </Col>
            </Row>
        </>
    );
};

export default Reactions;