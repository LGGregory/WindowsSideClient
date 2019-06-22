import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import './header.css'

export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedKey: "/"
        }
    }

    render() {
        return (
            <div className="header">
                <Nav
                    activeKey="/"
                    onSelect={selectedKey => this.setState({selectedKey : selectedKey})}
                >
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login" >Login/Create Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/computer">Computers</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div >
        )
    }
}

export default Header
