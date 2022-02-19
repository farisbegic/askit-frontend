import React from 'react';
import user from "../../services/user";
import {Container, Table} from "react-bootstrap";
import {useQuery} from "react-query";

const MostAnswers = () => {

    const { isLoading, data } = useQuery("mostAnswers", async () =>
        await user.getMostAnswers()
    );

    return (
        <Container fluid="sm" className="py-4">
            <h3 className="pb-3">Users with most answers</h3>
            { !isLoading && (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Answers</th>
                    </tr>
                    </thead>
                    <tbody>
                    { data.data.map(user => (
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