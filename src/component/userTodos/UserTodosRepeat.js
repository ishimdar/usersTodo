import React, { Component } from 'react';

class UserTodosRepeat extends Component{

    render(){
        console.log('this.props.todoLists', this.props.todoLists);
        return(
            <h4>
                My Todo lIst
            </h4>
        );
    };
}

export default UserTodosRepeat;