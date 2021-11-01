import React, { Component } from 'react';
import userService from '../services/userService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            userService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    userName: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role
                });
            });
        }
    }

    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = { userName: this.state.userName, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, role: this.state.role };
        console.log('employee => ' + JSON.stringify(user));

        if (this.state.id === '_add') {
            userService.createUser(user).then(res => {
                this.props.history.push('/users');
            });
        } else {
            userService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/users');
            });
        }

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    changeRoleHandler = (event) => {
        this.setState({ role: event.target.value });
    }

    cancel() {
        this.props.history.push('/users');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add User</h3>
        } else {
            return <h3 className="text-center">Update User</h3>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>UserName: </label>
                                        <input placeholder="UserName" name="userName" className="form-control"
                                            value={this.state.userName} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email ID: </label>
                                        <input placeholder="Email ID" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Role: </label>
                                        <input placeholder="Role" name="role" className="form-control"
                                            value={this.state.role} onChange={this.changeRoleHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUserComponent;