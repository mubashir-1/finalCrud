import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import {Link} from 'react-router-dom';


export default class EditUser extends Component {
    render() {
        return (
            <div className="ml-4 mr-4">
              <Form>
                   <FormGroup>
                       <Label>Name</Label>
                        <Input type='text' placeholder="enter name"></Input>
                   </FormGroup>
                   <Button type="submit"> EditName</Button>
               <Link to="/" className="btn btn-danger ml-2">cancel</Link>
               </Form>
            </div>
        )
    }
}
