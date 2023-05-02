import React, { Component } from 'react'

class HeaderUpdate extends React.Component {
    // 1. Call

    //Whrn Button Click its not Calling bucus it's only frist time called
    constructor(props) {
        super(props)
        this.state = { favoritecolor: 'red' }
        console.log(' constructor')
    }

    // 2. Call

    //Whrn Button Click
    // 2. Call
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return { favoritecolor: props.favcol }
    }

    //Whrn Button Click
    // 1. Call
    changeColor = () => {
        this.setState({ favoritecolor: 'blue' })
        console.log('changeColor')
    }

    //3. Call

    //Whrn Button Click
    // 3. Call
    render() {
        console.log('Render')
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        )
    }
}

export default function SendProps() {
    return (
        <div>
            <HeaderUpdate favcol="Yolue" />
        </div>
    )
}
