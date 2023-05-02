import React from 'react'

export default class ShouldComponentUpDate2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { favoritecolor: 'red' }

        console.log('constructor')
    }

    // When button click Called shouldComponentUpdate() ,than don't render anything
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return false // false hule render hube na..... true hule render hube
    }
    changeColor = () => {
        console.log('changeColor')
        this.setState({ favoritecolor: 'blue' })
    }
    render() {
        console.log(' render')
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
