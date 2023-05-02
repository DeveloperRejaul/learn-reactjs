import React, { Component } from 'react'

class GetDerivedStateFromProps extends Component {
    //1.Call constructor
    constructor(props) {
        super(props)
        this.state = { favoritecolor: 'red' }

        console.log(`constructor ${props.favcol}`)
    }

    //2.Call getDerivedStateFromProps
    // like setState But... Note = The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return {
            favoritecolor: props.favcol,
        }
    }

    //3. Call render
    render() {
        console.log('render')
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            </div>
        )
    }
}

export default function SentProps() {
    return (
        <div>
            <GetDerivedStateFromProps favcol="Yolue" />
        </div>
    )
}
