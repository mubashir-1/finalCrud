import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap';

export default class UserList extends Component {
    render() {
        return (

            <ListGroup className="mt-4">
                <ListGroupItem className="d-flex">
                    <strong>User One</strong>
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to="/edit">Edit</Link>
                        <Button color="danger">Delete</Button>
                    </div>
                </ListGroupItem>

                <ListGroupItem className="d-flex">
                    <strong>User Two</strong>
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to="/edit">Edit</Link>
                        <Button color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            </ListGroup>

        )
    }
}
