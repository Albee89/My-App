import React, { Component } from 'react'

export class Counter extends Component {
    state = {count:0}
    incCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incCount}>
The button has been clicked {this.state.count} times
                </button>
            </div>
        )
    }
}

export default Counter