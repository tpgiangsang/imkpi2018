import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import TaskForm from '../components/TaskForm';

class TaskFormContainer extends Component {
    render() {
        var { isDisplayForm, itemEditing, onCloseForm, onSaveTask  } = this.props;
        return (
            <TaskForm 
                    isDisplayForm = {isDisplayForm} 
                    itemEditing = {itemEditing}
                    onCloseForm = {onCloseForm}
                    onSaveTask = {onSaveTask}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);
