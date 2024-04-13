const todoReducer = (state = [], action) => {

    console.log('actionTodoReduceIsimdar', action);
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
        case 'GET_TODO_DATA_RECEIVED':
            return action.data;
        default:
            return state;
    }
}

export default todoReducer;