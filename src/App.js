import React, { Component } from 'react'
import Action from './Component/Action'
import Number from './Component/Number'
import TopAction from './Component/TopAction'
import "./App.css"

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            previousOperand : 0,
            currentOperand : 0,
        }
    }

    calculation = () =>{
        this.setState({
            
        })
    }


    render() {
        return (
            <main>
                <div className='input-wrapper'>
                    <input className='input' type='text'></input>
                </div>
                <div className='cal-container'>
                    <div className='number-wrapper'>
                        <TopAction/>
                        <Number/>
                    </div>
                    <Action/>
                </div>
            </main>
        )
    }
}
