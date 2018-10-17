import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect to store to get state
import * as actions from '../actions/index';
import Login from '../components/Login';


class LoginContainer extends Component {
    render() {
        var { userLogin, onHandleLogin, isLogin, onChangeStatusToLogin} = this.props;
        return (
            <Login isLogin = {isLogin} userLogin={userLogin} onHandleLogin = {onHandleLogin} onChangeStatusToLogin={onChangeStatusToLogin}/>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        userLogin: state.login,
        isLogin: state.authChecked
    }
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onHandleLogin: (userLogin) => {
			dispatch(actions.onLogin(userLogin));
		},
        onChangeStatusToLogin: () => {
            dispatch(actions.isLogin());
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

