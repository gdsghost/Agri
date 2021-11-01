import React, { Component } from 'react';
import userService from '../services/userService';

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount() {
        userService.getUserById(this.state.id).then(res => {
            this.setState({ user: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="room">
                            <label>User First Name</label>
                            <div>{this.state.user.firstName}</div>
                        </div>
                        <div className="room">
                            <label>User Last Name</label>
                            <div>{this.state.user.lastName}</div>
                        </div>
                        <div className="room">
                            <label>User Email ID</label>
                            <div>{this.state.user.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewUserComponent;