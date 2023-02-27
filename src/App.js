import React, { Component } from 'react'
import Action from './Component/Action'
import Number from './Component/Number'
import TopAction from './Component/TopAction'
import './App.css'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            expression: ""
        }
    }

    setExpression = (input) => {
        this.setState({
            expression: this.state.expression.concat(input)
        })
    }

    setReset = () => {
        this.setState({
            expression: ""
        })
    }

    setDelete = () => {
        this.setState({
            expression: this.state.expression.slice(0, this.state.expression.length - 1)
        })
    }

    setResult = () => {
        let calc = eval(this.state.expression)
        this.setState({
            expression: `${calc}`
        })
    }

    //key press calculation
    componentDidMount() {
        document.addEventListener('keydown', this.detectKeyPress)
    }

    detectKeyPress = (e) => {
        let current = this.state.expression[this.state.expression.length - 1];
        if (e.key.match(/[*,/,+,%]/g) && !current.match(/[*,/,+,%]/g)) {
            this.setState({
                expression: this.state.expression.concat(e.key)
            })
        } else if (e.key === "-" && current !== "-") {
            this.setState({
                expression: this.state.expression.concat(e.key)
            })
        } else if (e.key.match(/[1-9]/)) {
            this.setState({
                expression: this.state.expression.concat(e.key)
            })
        } else if (e.key === 'Enter') {
            this.setResult()
        } else if (e.key === 'Backspace' || e.key === 'Delete') {
            this.setDelete()
        } else if(e.key==="0" && current.match(/[0-9]/)){
            this.setState({
                expression: this.state.expression.concat(e.key)
            })
        }
    }

    render() {
        return (
            <main>
                <div className='input-wrapper'>
                    <input className='input' type='text' value={this.state.expression !== '' ? this.state.expression : "0"}></input>
                </div>
                <div className='calc-container'>
                    <div className='number-wrapper'>
                        <TopAction setReset={this.setReset} setDelete={this.setDelete} setExpression={this.setExpression} />
                        <Number setExpression={this.setExpression} />
                    </div>
                    <Action current={this.state.expression} setExpression={this.setExpression} setResult={this.setResult} />
                </div>
            </main>
        )
    }
}
