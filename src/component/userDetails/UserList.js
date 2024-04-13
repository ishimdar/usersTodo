import React, { Component } from 'react';
import {connect} from 'react-redux';


class UserList extends Component{    

    constructor(props){
        super();
        this.state = {
            userInfo: {},
            selectValue: ''
        }
    }


    handleClickUser = (e) => {                
        this.setState({
            selectValue: e.target.value
        });

        let selectedUserDtls = this.props.users.filter( (item) => {
            return item.id === parseInt(e.target.value);
        });
        // // this.props.isClickgetUserInfo('selectedUserDtls', selectedUserDtls);
        // // console.log('selectedUserDtls', selectedUserDtls);
        // // debugger;
        
        this.props.dispatch({
            type: 'SELET_USER_DETAILS',
            selectedUserDtls
        });

        this.props.dispatch({
            type: 'CALL_TODO_API',
            selectedUserDtls
        });

    }

    render(){        
        let myNewUsersLi;
        if(this.props.users.length > 0){
            myNewUsersLi = this.props.users.map( (item) => {
                return (
                    <option key={item.id} id={item.id} value={item.id}>{item.name}</option>
                );
            });                
        }        

        return(
            <select value={this.state.selectValue} onChange={this.handleClickUser}>
                {myNewUsersLi}
            </select>            
        );
    }
}

export default connect() (UserList);