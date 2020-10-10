import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AddUser extends Component {
    render() {
        return (
            <div>
                <Form >
                    <FormGroup >
                        <Label>  <strong>Name</strong></Label>
                        <Input type='text' placeholder="enter name"></Input>
                    </FormGroup>
                    <Button type="submit"> Submit</Button>
                    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                    
                    <FormGroup className="ml-auto">
                        <Label>  <strong> Father Name</strong></Label>
                        <Input type='text' placeholder="enter name"></Input>
                    </FormGroup>
                    <Button type="submit"> Submit</Button>
                    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                </Form>
            </div>
        )
    }
}
