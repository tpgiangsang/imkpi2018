import React, { Component } from 'react'
import { connect } from 'react-redux'; // connect to store to get state
import * as actions from '../actions/index';
import TaskItem from '../components/TaskItem';

class TaskItemContainer extends Component {
    render() {
        var { tasks, index, onUpdateStatus, onDeleteTask, onCloseForm, onOpenForm, onEditTask } = this.props;
        return (
            <TaskItem 
                tasks = {tasks}
                index = {index}
                onUpdateStatus = {onUpdateStatus}
                onDeleteTask = {onDeleteTask}
                onCloseForm = {onCloseForm}
                onOpenForm = {onOpenForm}
                onEditTask = {onEditTask}
            />
        )
    }
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onUpdateStatus: (id) => {
			dispatch(actions.updateStatus(id));
		},
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItemContainer);
