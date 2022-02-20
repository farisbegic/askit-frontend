import React from 'react';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai';
import {Col, Row} from "react-bootstrap";
import questionRating from "../../services/questionRating";
import {useMutation, useQueryClient} from "react-query";

const Reactions = (props) => {
    const queryClient = useQueryClient();

    const handleInsert = useMutation(async (value) => {
        await questionRating.saveRating(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries("question")
        }
    })

    const handleDelete = useMutation(async (value) => {
        await questionRating.deleteRating(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries("question")
        }
    })

    const handleEdit = useMutation( async (value) => {
        await questionRating.editRating(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries("question")
        }
    })

    const handleLike = async () => {
        if (props.hasLiked === "1") {
            handleDelete.mutate(props.id)
        } else if (props.hasDisliked === "1") {
            handleEdit.mutate({
                questionId: props.id,
                isLike: true
            })
        } else {
            handleInsert.mutate({
                questionId: props.id,
                isLike: true
            })
        }
    }

    const handleDislike = async () => {
        if (props.hasDisliked === "1") {
            handleDelete.mutate(props.id)
        } else if (props.hasLiked === "1") {
            handleEdit.mutate({
                questionId: props.id,
                isLike: false
            })
        } else {
            handleInsert.mutate({
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