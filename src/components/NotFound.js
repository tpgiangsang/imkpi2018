import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                
                <div className="alert alert-danger">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Error 404: </strong> Page Not Found
                </div>
                
            </div>
        );
    }
}

export default NotFound;
