import * as types from './../constants/ActionTypes';

var initialState = {
    by: 'name',
    value: 1 // 1: tăng, -1: giảm
};

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SORT:
            state = {
                by : action.sort.by,
                value: action.sort.value
            }
            return state;
        default: 
            return state;
    }
};

export default myReducer;