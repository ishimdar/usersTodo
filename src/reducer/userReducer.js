import {connect} from 'react-redux';

const userReducer = (state = [], action) => {

    console.log('actionUser', action);
    switch (action.type) {
        //     case 'ADD_TODO':
        //         return [
        //             ...state,
        //             todo(
        //                 undefined,
        //                 Object.assign(action, {
        //                     id: state.length
        //                 })
        //             )
        //         ]
        //     case 'TOGGLE_TODO':
        //         return state.map(t => todo(t, action))
        //     /*
        //   Consider all received data as the initial list of
        //   todo items
        //   */
        case 'GET_USER_DATA_RECEIVED':
            return action.data;
        
            
        case 'SELET_USER_DETAILS':
            return action.data;
            // return [
            //     ...state,

            // ];
        
            
        default:
            return state;
    }
}

export default userReducer;