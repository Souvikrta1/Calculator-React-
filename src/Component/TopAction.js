import React, { Component } from 'react'

export default class TopAction extends Component {

    reset = () =>{
        this.props.setReset()
    }

    delete = () =>{
        this.props.setDelete()
    }

    calculation = (e) =>{
        this.props.setExpression(e.target.value)
    }

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
