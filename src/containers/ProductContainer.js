import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Products from '../components/Products';



class ProductContainer extends Component {

	render() {
		var { isDisplayForm, itemEditing, onToggleForm, onClearTask, onOpenForm,isLogin } = this.props;
		// 	console.log('pcontai', isLogin);
		// if(isLogin === false) {
		// 	console.log('pcontai', isLogin);
		// 	<Redirect to="/" />
		// }
		return (
			<Products 
                isDisplayForm = {isDisplayForm}
                itemEditing = {itemEditing}
                onToggleForm = {onToggleForm}
                onClearTask = {onClearTask}
                onOpenForm = {onOpenForm}
				isLogin = { isLogin }
            />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isDisplayForm: state.isDisplayForm,
		itemEditing: state.itemEditing,
		isLogin: state.authChecked
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onToggleForm: () => {
			dispatch(actions.toggleForm());
		},
		onClearTask: (task) => {
			dispatch(actions.editTask(task));
		},
		onOpenForm: () => {
			dispatch(actions.openForm());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
