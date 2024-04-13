import React, { Component } from 'react';


import UserListBox from './userDetails/UserListBox';
import UserTodoList from './userTodos/index';


class AllUsers extends Component {

    render() {        
        return (
            <>
            <UserListBox />
            <UserTodoList />
            </>
        );
    }
}

export default AllUsers;