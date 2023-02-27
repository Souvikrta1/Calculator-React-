import React, { Component } from 'react'

export default class Action extends Component {

    calculation = (e) =>{
        if(this.props.current[this.props.current.length-1].match(/[0-9]/g) !== null){
            this.props.setExpression(e.target.value)
        }
    }

    result = () =>{
        if(this.props.current !== '') this.props.setResult()
    }

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
