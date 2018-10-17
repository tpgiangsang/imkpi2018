import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import logo from '../assets/logo.png';

class Menu extends Component {
    
    onHandleLogout = () => {
        this.props.onHandleLogout();
    }

    render() {
        var { isLogin } = this.props;
        return (
            <div className="navbar navbar-basic bg-cl mb-50">
                <NavLink className="" to="/home"><img className="img-fluid" src={logo} alt="img" style={{width: 100, height: 65, cursor: 'pointer'}}/></NavLink>
                <div className="float-right padding-top-5">
                    <ul className="nav navbar-nav">
                        <li className="nav-li" style={{display: isLogin? 'block' : 'none'}}>
                            <a onClick={this.onHandleLogout}>Logout</a>
                        </li>
                        <li className="nav-li" style={{display: isLogin? 'none' : 'block'}}>             
                            <NavLink exact to="/login" >Login</NavLink>
                        </li>
                        <li className="nav-li">             
                            <a style={{cursor: 'pointer', display: isLogin? 'none' : 'block'}}>Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        isLogin: state.authChecked
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onHandleLogout: () => {
            dispatch(actions.isLogout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);