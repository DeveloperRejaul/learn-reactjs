import React, { Component } from 'react'

// The componentDidMount() method is called after the component is rendered.
export default class ComponentDidMount extends Component {
    // 1. Call constructor
    constructor(props) {
        super(props)
        this.state = { favoritecolor: 'red' }
    }

    // 3. Call componentDidMount
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: 'yellow' })
       }, 2000)
    }

    // 2. Call render
    render() {
        return <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    }
}
