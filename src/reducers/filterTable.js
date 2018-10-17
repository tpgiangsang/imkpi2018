import * as types from './../constants/ActionTypes';

var initialState = {
    name: '',
    status: -1,
    category: 'all',
    brand: 'all'
};

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER_TABLE:
            state = {
                name : action.filter.name,
                status: parseInt(action.filter.status, 10),
                category: action.filter.category,
                brand: action.filter.brand
            }
            return state;
        default: 
            return state;
    }
};

export default myReducer;