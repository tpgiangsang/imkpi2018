import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer';
import SortContainer from '../containers/SortContainer'


class Control extends Component {
    render() {
        return (
            <div className="row mt-15">
                <SearchContainer />
                <SortContainer />
            </div>
        );
    }
}

export default Control;
