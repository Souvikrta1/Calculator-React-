import React, { Component } from 'react'

export default class Number extends Component {
    render() {
        return (
            <div className='numbers'>
                <button onClick={this.calculation} value={'7'}>7</button>
                <button onClick={this.calculation} value={'8'}>8</button>
                <button onClick={this.calculation} value={'9'}>9</button>
                <button onClick={this.calculation} value={'4'}>4</button>
                <button onClick={this.calculation} value={'5'}>5</button>
                <button onClick={this.calculation} value={'6'}>6</button>
                <button onClick={this.calculation} value={'1'}>1</button>
                <button onClick={this.calculation} value={'2'}>2</button>
                <button onClick={this.calculation} value={'3'}>3</button>
                <button onClick={this.calculation} value={'00'}>00</button>
                <button onClick={this.calculation} value={'0'}>0</button>
                <button onClick={this.calculation} value={'.'}>.</button>
            </div>
        )
    }
}
