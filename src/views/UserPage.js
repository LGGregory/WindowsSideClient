import { Tab, Tabs } from 'react-bootstrap'
import React, { Component } from 'react'
import UserLogin from '../components/user/UserLogin';
import UserCreate from '../components/user/UserCreate';


export default class CreatePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            key: 'login'
        }
    }

    render() {
        return (
            <div >
                <Tabs
                    defaultActiveKey={this.state.activeTab}
                    id="userTabs"
                    onSelect={key => this.setState({ key })}>

                    <Tab eventKey="login" title="Login">
                        <UserLogin />
                    </Tab>
                    <Tab eventKey="create" title="Create">
                        <UserCreate />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
