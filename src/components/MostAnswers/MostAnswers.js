import React, {useEffect, useState} from 'react';
import user from "../../services/user";
import {Container, Table} from "react-bootstrap";

const MostAnswers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        user.getMostAnswers()
            .then(response => {
                setUsers(response.data)
            })
    }, [])
    return (
        <Container fluid="sm" className="py-4">
            <h3 className="pb-3">Users with most answers</h3>
            { users && (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Answers</th>
                    </tr>
                    </thead>
                    <tbody>
                    { users.map(user => (
                        user.count > 0 && (
                            <tr key={user.id}>
                                <td>{user.firstName + " " + user.lastName}</td>
                                <td>{user.count}</td>
                            </tr>
                        )
                    ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default MostAnswers;