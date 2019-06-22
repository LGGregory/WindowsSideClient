import React, { Component } from 'react';
import './computers.css';
import ComputerCard from './ComputerCard';
import axios from 'axios'

class Computers extends Component {
    constructor() {
        super();
        this.state = {
            email : "liam@euclid.ca", 
            computers: []
        }
    }

    componentDidMount() {
        const info = {
           email : this.state.email
        };
        axios.post('/api/computers/get', info)
        .then((response)=>{           
            var status = response.status;
            if (status === 201){
                //Account created
                this.setState({computers : response.data});
            } else {
                this.setState({defaultText : "Error"});
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Managed Computers</h2>
                <div>
                {
                    this.state.computers.map((computer) => (
                        <ComputerCard key={computer.name} computer_name={computer.name} computer_styled_name={computer.styled_name} email={this.state.email} />
                    ))
                }
                </div>
            </div>
        );
    }
}

export default Computers;