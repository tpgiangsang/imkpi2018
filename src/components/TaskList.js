import React, { Component } from 'react';
import TaskItemContainer from '../containers/TaskItemContainer'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1, // all, active: 1, deactive: 0
            filterCategory: 'all',
            filterBrand: 'all'
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus,
            category: name === 'filterCategory' ? value : this.state.filterCategory,
            brand: name === 'filterBrand' ? value : this.state.filterBrand
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name]: value
        })
    }

    render() {
        var { filterName, filterStatus, filterCategory, filterBrand } = this.state;
        var { tasks, filterTable, keyword, sort } = this.props; // var tasks = this.props.tasks
        // Filter on table
        // by name
        if (filterTable.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
            })
        }

        // by status
        tasks = tasks.filter((task) => {
            if (filterTable.status === -1) {
                return task;
            } else {
                return task.status === (filterTable.status === 1 ? true : false)
            }
        })

        // by category
        tasks = tasks.filter((task) => {
            if (filterTable.category === 'all') {
                return task;
            } else {
                return task.category.indexOf(filterTable.category) !== -1;
            }
        })

        // by brand
        tasks = tasks.filter((task) => {
            if (filterTable.brand === 'all') {
                return task;
            } else {
                return task.brand.indexOf(filterTable.brand) !== -1;
            }
        })

        // Search
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }

        // Sort
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }

        var elmTasks = tasks.map((tasks, index) => {
            return <TaskItemContainer key={tasks.id} index={index} tasks={tasks} />
        })

        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover mt-15">
                        <thead>
                            <tr>
                                <th className="text-center">No.</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Category</th>
                                <th className="text-center">Brand</th>
                                <th className="text-center">Note</th>
                                <th className="text-center" colSpan="2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange} />
                                </td>
                                <td>
                                    <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                                        <option value="-1">All</option>
                                        <option value="0">Out of Stock</option>
                                        <option value="1">In Stock</option>
                                    </select>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <select className="form-control" name="filterCategory" value={filterCategory} onChange={this.onChange}>
                                        <option value="all">All</option>
                                        <option value="Headphone">Headphone</option>
                                        <option value="PC">PC</option>
                                        <option value="Ipad">Ipad</option>
                                        <option value="Iphone">Iphone</option>
                                        <option value="Laptop">Laptop</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-control" name="filterBrand" value={filterBrand} onChange={this.onChange}>
                                        <option value="all">All</option>
                                        <option value="Samsung">Samsung</option>
                                        <option value="Apple">Apple</option>
                                        <option value="HP">HP</option>
                                        <option value="Asus">Asus</option>
                                        <option value="Dell">Dell</option>
                                    </select>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {elmTasks}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;
