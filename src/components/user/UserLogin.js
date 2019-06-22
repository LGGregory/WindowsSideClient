import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

export default class UserLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultText: 'Submit',
            email: '',
            password: ''
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



        console.log(info);

        axios.post('/api/user/login', info)
            .then((response) => {
                var status = response.status;
                if (status === 201) {
                    //Account created
                    this.setState({ defaultText: "Logged In" });
                } else {
                    this.setState({ defaultText: "Error" });
                }

            });

    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ defaultText: "Submitted" });
        var body = {
            email: this.state.email,
            password: this.state.password
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
                        </Card.Text>
                    </Card.Body>
                    <Button as="input" type="submit" value={this.state.defaultText} variant="primary" />
                </Card>
            </form>
        )
    }
}
