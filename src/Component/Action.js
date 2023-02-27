import React, { Component } from 'react'

export default class Action extends Component {
    render() {
        return (
            <div className='action'>
                <button onClick={this.calculation} value={'/'}>÷</button>
                <button onClick={this.calculation} value={'*'}>x</button>
                <button onClick={this.calculation} value={'-'}>-</button>
                <button onClick={this.calculation} value={'+'}>+</button>
                <button onClick={this.result}>=</button>
            </div>
        )
    }
}
