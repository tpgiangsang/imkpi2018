import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect to store to get state
import * as actions from '../actions/index';
import TaskList from '../components/TaskList';

class TaskListContainer extends Component {
    render() {
        var { tasks, filterTable, keyword, sort, onFilterTable } = this.props; // var tasks = this.props.tasks
        return (
            <TaskList 
                tasks = {tasks}
                filterTable = {filterTable}
                keyword = {keyword}
                sort = {sort}
                onFilterTable = {onFilterTable}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => { // chuyển state từ store thành props
    return {
        tasks: state.tasks, //tasks in task.js,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
