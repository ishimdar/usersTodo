import React, { Component } from 'react';

import { connect } from 'react-redux';

import UserTodosRepeat from './UserTodosRepeat';

class UserTodoList extends Component {

    render() {
        return (
            <div>
                <h2>
                    UserTodoList                    
                </h2>
                <UserTodosRepeat todoLists={this.props.selectedUserTodo} />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        selectedUserTodo: state
    }
}

export default connect(mapStateToProps)(UserTodoList);