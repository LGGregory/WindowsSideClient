import React, { Component } from 'react'
import './checker.scss'

export default class Checker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <label className="switch-wrap">
                <input type="checkbox" {...this.props} />
                <div className="switch"></div>
            </label>
        )
    }
}