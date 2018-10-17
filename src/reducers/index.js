import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';
import login from './login';
import authChecked from './authChecked';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing,
    filterTable,
    search,
    sort,
    login,
    authChecked
});

export default myReducer;