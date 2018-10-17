import * as types from './../constants/ActionTypes';

var initialState = false; // is not login

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ISLOGIN: 
            return true;
        case types.ISLOGOUT:
            return false;
        default: return state;
    }
};

export default myReducer;