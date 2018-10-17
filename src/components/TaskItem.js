import React, { Component } from 'react'

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.tasks.id);
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.tasks.id);
        this.props.onCloseForm();
    }

    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.tasks);
    }
    render() {
        var { tasks, index } = this.props;
        return (
            <tr>
                <td>{ index + 1}</td>
                <td>{ tasks.name }</td>
                <td className="text-center">
                    <span className={tasks.status ? 'label label-success' : 'label  label-default'} onClick={this.onUpdateStatus}>
                        {tasks.status ? 'In Stock' : 'Out of Stock'}
                    </span>
                </td>
                <td>{ tasks.price }</td>
                <td>{ tasks.quantity }</td>
                <td>{ tasks.category }</td>
                <td>{ tasks.brand }</td>
                <td>{ tasks.note }</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick={this.onEditTask}>
                        <span className="fa fa-pencil mr-5"></span> Edit
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span> Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default TaskItem;
