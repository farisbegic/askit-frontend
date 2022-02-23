import React, {useState} from 'react';
import {Button, Card, Container, Form, FormControl} from "react-bootstrap";
import question from "../../services/question";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");
    const { isLoading, data } = useQuery(['searchQuestions', search], async () =>
        await question.searchQuestion(search), {
            enabled: Boolean(search)
        }
    );
    return (
        <Container fluid="sm">
            <h3 className="pb-3">Search for questions</h3>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search by question"
                    aria-label="Search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </Form>
            { !isLoading && search && (
                data.data.map((find) => (
                    <Link to={`/question/${find.id}`} className="text-decoration-none" key={find.id}>
                        <Card className="d-flex justify-content-center my-2">
                            <p className="m-2 text-black">{find.description}</p>
                        </Card>
                    </Link>
                ))
            )}
        </Container>
    );
};

export default Search;