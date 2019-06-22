import React, { Component } from 'react'
import { Card, Table, Button, ButtonGroup, Form } from 'react-bootstrap'
import Checker from '../checker/checker'
import axios from 'axios'



export default class ComputerCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "changed": false,
            "email": this.props.email,
            errortext : "",
            currentState: {
                "computer_name": this.props.computer_name,
                "styled_name" : this.props.computer_styled_name,
                "usages": []
            },
            initialState: {
                "computer_name": this.props.computer_name,
                "styled_name" : this.props.computer_styled_name,
                "usages": []
            }
        };
        this.takeAction = this.takeAction.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }


    upFirst = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    handleChange = async function (event) {
        const target = event.target;
        this.setState({ "changed": true });
        const id = target.id;
        const list = await this.state.currentState.usages.map((usage, j) => {
            if (id - 1 === j) {
                usage.value = !usage.value;
                return usage;
            } else {
                return usage;
            }
        });
        var newState = this.state.currentState;
        newState.usages = list;
        await this.setState({currentState : newState});
    }

    handleSubmit = async function(event) {
        event.preventDefault();
        const info  = {
            email : this.state.email,
            computer_name : this.state.currentState.computer_name,
            styled_name : this.state.currentState.styled_name,
            usages : this.state.currentState.usages
        }
        axios.post('/api/uses/update', info).then((response)=>{
            console.log(response);
            if(response.status === 201){
                var iV = this.state.initialState;
                iV.usages =  JSON.parse(JSON.stringify(this.state.currentState.usages));
                this.setState({initialState:iV});
                this.setState({ "changed": false });
            } else {
                // Something's gone terribly wrong.
            }
        });
    }

    takeAction = async function(action, event){
        event.preventDefault();
        console.log(event.props);
        const info = {
            email : this.state.email,
            computer_name : this.state.currentState.computer_name,
            action : action
        }
        await axios.post('/api/actions', info).then((response)=>{
            console.log(response);
        });
    }

    resetForm() {
        const iV = JSON.parse(JSON.stringify(this.state.initialState));
        this.setState({ changed:false, currentState:iV });
    }

    componentDidMount() {
        const info = {
            email: this.state.email,
            computer_name: this.state.currentState.computer_name
        };
        axios.post('/api/uses/get', info)
            .then((response) => {
                var status = response.status;
                if (status === 201) {
                    var newState = this.state.currentState;
                    const usages = JSON.parse(JSON.stringify(response.data));
                    newState.usages = usages;
                    var init = JSON.parse(JSON.stringify(newState));
                    this.setState({ 
                        currentState:newState, 
                        initialState: init 
                    });
                } else {
                    console.log("Error");
                }
            });
    }


    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={this.handleSubmit} >
                    <Card.Body>
                        <Card.Title>{this.state.currentState.styled_name}</Card.Title>
                        <Table>
                            <tbody>
                                {this.state.currentState.usages.map((usage) =>
                                    <tr key={usage.usage_id}>
                                        <td>
                                            <a href="" onClick={(e)=>this.takeAction(usage.usage_name, e)}>{this.upFirst(usage.usage_name)}</a>
                                        </td>
                                        <td>
                                            <Checker id={usage.usage_id} name={usage.usage_name} checked={usage.value} onChange={this.handleChange} />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        <div>{this.state.errortext}</div>
                    </Card.Body>
                    <ButtonGroup>
                        <Button onClick={this.resetForm} disabled={!this.state.changed} value="reset" > Reset </Button>
                        <Button type="submit" onClick={this.handleSubmit} disabled={!this.state.changed} value="Apply" >Submit</Button>
                    </ButtonGroup>
                </Form>
            </Card>
        )
    }
}

