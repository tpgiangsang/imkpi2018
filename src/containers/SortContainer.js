import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect to store to get state
import * as actions from '../actions/index';
import Sort from '../components/Sort';


class SortContainer extends Component {        
    render() {
        var { sort, onSort } = this.props;
        return (
            <Sort sort={sort} onSort={onSort} />
        );
    }
}

const mapStateToProps = (state) => {
	return {
        sort: state.sort
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSort: (sort) => {
			dispatch(actions.sortTask(sort));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);

