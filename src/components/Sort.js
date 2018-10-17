import React, { Component } from 'react';

class Sort extends Component {        
    onClick = (sortBy, sortValue) => {
        var sort = {
            by: sortBy,
            value: sortValue
        }
        this.props.onSort(sort);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-caret-square-o-down ml-5"></span> Sort 
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={ () => this.onClick('name', 1)}>
                            <a role="button" className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort-selected' : ''}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Name A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('name', -1)}>
                            <a role="button" className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort-selected' : ''}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Name Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={ () => this.onClick('status', 1)}>
                            {/*còn hàng. kích hoạt*/}
                            <a role="button" className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort-selected' : ''}>
                                In Stock 
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('status', -1)}>
                            {/*hết hàng. ẩn*/}
                            <a role="button" className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort-selected' : ''}>
                                Out of Stock
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;

