import React, { Component } from 'react'

export class NewComputerCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name = ""
        }
    }
    
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={this.handleSubmit} >
                    <Card.Body>
                        <Card.Title>Add Computer</Card.Title>
                    </Card.Body>
                    <ButtonGroup>
                        <Button onClick={this.resetForm} disabled={!this.state.changed} value="reset" > Reset </Button>
                        <Button type="submit" disabled={!this.state.changed} value="Apply" >Submit</Button>
                    </ButtonGroup>
                </Form>
            </Card>
        )
    }
}