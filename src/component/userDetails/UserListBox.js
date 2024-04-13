import React, { Component } from 'react';

import { connect } from 'react-redux';

// import users from '../../reducer/index';
// import loading from '../../APIservice/loading';

// import { connect } from 'react-redux';

// import UserList from './UserList';
import UserList from './UserList';

class UserListBox extends Component{
    
    render(){
        console.log('this.props.postsUserLis', this.props.posts);
        return(
            <div>                                
                <UserList users={this.props.posts.userReducer} />
            </div>
        );
    }
}


// export default UserListBox;

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps) (UserListBox);