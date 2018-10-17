import * as types from './../constants/ActionTypes';

var initialState = {
    id: '',
    name: '',
    status: false,
    price: 0,
    quantity: 0,
    category: 'usb',
    brand: 'samsung',
    note: ''
};

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.EDIT_TASK:
            return action.task;
        default: 
            return state;
    }
};

export default myReducer;
