import * as types from './../constants/ActionTypes';

var initialState = {
    username: '',
    password: ''
};

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN:
            state = {
                username : action.userLogin.username,
                password: action.userLogin.password
            }
            localStorage.setItem('user', JSON.stringify(state));
            return state;
        default: 
            return state;
    }
};

export default myReducer;