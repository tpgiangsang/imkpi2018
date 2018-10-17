import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect to store to get state
import * as actions from '../actions/index';
import Search from '../components/Search';


class SearchContainer extends Component {
    render() {
        var { onSearch } = this.props;
        return (
            <Search onSearch={onSearch} />
        );
    }
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSearch: (keyword) => {
			dispatch(actions.searchTask(keyword));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

