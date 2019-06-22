import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ComputerRow extends Component {
    render() {
        console.log(this.props.computer)
        return (
            <tr key={this.props.computer.id}>
                <td>{this.props.computer.computer_name}</td>
                <td>
                    {(this.props.computer.allowed.reboot) ? "True" : "False"}
                </td>
                <td>
                    {(this.props.computer.allowed.shutdown) ? "True" : "False"}
                </td>
            </tr>
        )
    }
}

ComputerRow.propTypes = {
    computer : PropTypes.object.isRequired
}

export default ComputerRow
