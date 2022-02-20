import React from 'react';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai';
import {Col, Row} from "react-bootstrap";
import {useMutation, useQueryClient} from "react-query";

const Reactions = (props) => {
    const queryClient = useQueryClient();

    const handleInsert = useMutation(async (value) => {
        await props.service.saveRating(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries(props.refetch)
        }
    })

    const handleDelete = useMutation(async (value) => {
        await props.service.deleteRating(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries(props.refetch)
        }
    })

    const handleEdit = useMutation( async (value) => {
        await props.service.editRating(value)
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries(props.refetch)
        }
    })

    const handleLike = async () => {
        if (props.hasLiked === "1") {
            handleDelete.mutate(props.id)
        } else if (props.hasDisliked === "1") {
            handleEdit.mutate({
                id: props.id,
                isLike: true
            })
        } else {
            handleInsert.mutate({
                id: props.id,
                isLike: true
            })
        }
    }

    const handleDislike = async () => {
        if (props.hasDisliked === "1") {
            handleDelete.mutate(props.id)
        } else if (props.hasLiked === "1") {
            handleEdit.mutate({
                id: props.id,
                isLike: false
            })
        } else {
            handleInsert.mutate({
                id: props.id,
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