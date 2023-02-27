import React, { Component } from 'react'

export default class TopAction extends Component {
    render() {
        return (
            <div className='top-action'>
                <button onClick={this.reset}>AC</button>
                <button onClick={this.calculation} value={"%"}>%</button>
                <button onClick={this.delete}>DEL</button>
            </div>
        )
    }
}
