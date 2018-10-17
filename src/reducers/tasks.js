import * as types from './../constants/ActionTypes';


var randomString = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    return randomString() + randomString() + '-' + randomString() + '-' + randomString() + '-' + randomString() + '-' + randomString() + randomString() + randomString();
}

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id) {
            result = index;
        }
    });
    return result;
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    var index = -1;
    var id = '';
    switch(action.type) {
        case types.LIST_ALL: 
            return state;

        case types.SAVE_TASK:
            var task = {
                id : action.task.id,
                name: action.task.name, // tham số truyền vào action
                status: action.task.status,
                price: action.task.price,
                quantity: action.task.quantity,
                category: action.task.category,
                brand: action.task.brand, 
                note: action.task.note
            };

            // Add Task
            if(!task.id) {
                task.id = generateID();
                state.push(task);
            } 
            // Edit Task
            else { 
                index = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.UPDATE_STATUS_TASK: 
            id = action.id;
            index = findIndex(state, id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            };
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        
        case types.DELETE_TASK:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default: 
            return state;
    }
};

export default myReducer;