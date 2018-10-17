import React, { Component } from 'react'
import TaskFormContainer from '../containers/TaskFormContainer';
import TaskListContainer from '../containers/TaskListContainer';
import Control from './Control';
import { Redirect } from 'react-router-dom';

class Products extends Component {

    onToggleForm = () => {
        var { itemEditing } = this.props;
        var stateDefault = {
            id: '',
            name: '',
            status: false,
            price: 0,
            quantity: 0,
            brand: '',
            note: ''
        }
        if (itemEditing && itemEditing.id !== '') {
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onClearTask(stateDefault);
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }

    render() {
        var { isDisplayForm, isLogin } = this.props;
        if(!isLogin) {
            console.log("il",isLogin);
            return (
                <Redirect  to = "/" />
            )
        }
        return (
            <div >         
                <div className="container">
                    <div className="row">
                        <div className={isDisplayForm ? 'col-xs-3 col-sm-3 col-md-3 col-lg-3' : ''}>
                            <TaskFormContainer />
                        </div>
                        <div className={isDisplayForm ? 'col-xs-9 col-sm-9 col-md-9 col-lg-9' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span> Add Item
                        </button>
                        <Control />
                        <TaskListContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Products;