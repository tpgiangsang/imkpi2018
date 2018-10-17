import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    
    constructor(props) {
      super(props)
      this.state = {
            username: '',
            password: ''
        }
    }

    getUserList = () => {
        var user = JSON.parse(localStorage.getItem('user'));
        return user;
    }

    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeStatusToLogin();
        this.props.onHandleLogin(this.state);
    }    

    isLoginSuccess = () => {
        var flag = false;
        var { userLogin, isLogin } = this.props;
        var userStorage = this.getUserList();
        if(isLogin && userStorage && userLogin.username === userStorage.username && userLogin.password === userStorage.password) {
            flag = true;
        }
        return flag;
    }

    render() {
        var isLoginSuccess = this.isLoginSuccess();
        if(isLoginSuccess) {
            return (
                <Redirect to="/products" />
            )
        }
        return (
            <div className="container">
                <div className="row">       
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">  
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onHandleSubmit}>
                            <legend>Login</legend>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control"  name="username" value={this.state.name} onChange={this.onHandleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onHandleChange}/>
                            </div>         
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>   
            </div>
        );
    }
    
}

export default Login;
