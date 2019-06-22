import React, { Component } from 'react'
import { createUser } from '../../db/users';
import { Card, Button } from 'react-bootstrap'

export default class UserCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultText: 'Submit',
            email: '',
            password: '',
            fullname: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({
            [name]: value
        });
    }

    submitData(info) {
        createUser(info);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ defaultText: "Submitted" });
        var body = {
            email: this.state.email,
            password: this.state.password,
            fullname: this.state.fullname
        };
        this.submitData(body);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Create Account</Card.Title>
                        <Card.Text>
                            <input type="email" name="email" id="email" onChange={this.handleChange} value={this.state.username} placeholder="Email"/>
                            <br />
                            <input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.passwod} placeholder="Password"/>
                            <br />
                            <input type="text" name="fullname" id="fullname" onChange={this.handleChange} value={this.state.fullname} placeholder="Name"/>
                        </Card.Text>
                    </Card.Body>
                    <Button as="input" type="submit" value={this.state.defaultText} variant="primary" />
                </Card>
            </form >
        )
    }
}
