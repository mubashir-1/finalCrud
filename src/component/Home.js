import React, { Component } from 'react';
import Heading from './Heading';
import UserList from './UserList';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Heading/>
                <UserList/>
            </div>
        )
    }
}
