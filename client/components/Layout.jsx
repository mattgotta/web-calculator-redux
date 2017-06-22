/*
    ./client/components/App.jsx
*/
import React from 'react';
import {connect} from 'react-redux';

import {buttonPress, handleClick, handleUserInput} from '../actions/operatorActions';

@connect((store) => {
  return {
    firstInput: store.operator.firstInput,
    userInput: store.operator.userInput,
  }
})

export default class Layout extends React.Component {
  buttonPress(e) {
    this.props.dispatch(buttonPress(e))
  }

  handleUserInput(e) {
    this.props.dispatch(handleUserInput(e))
  }
  handleClick(e) {
    this.props.dispatch(handleClick(e))
  }

  render() {

    return (
     <div style={{textAlign: 'center'}} className="calc">
        <h3 className="title">Crapulator</h3>
        <h2 className="back">{this.props.firstInput}</h2>
        <input
         value={this.props.userInput}
         type="text"
         className="input"
         onChange={this.handleUserInput.bind(this)} /><br/>
        <button id='SQRT' onClick={this.buttonPress.bind(this)} className="buttonsTop">sqrt</button>
        <button id='SQUARE' onClick={this.buttonPress.bind(this)} className="buttonsTop">^2</button>
        <button id='1/x' onClick={this.buttonPress.bind(this)} className="buttonsTop">1/x</button><br/>
        <button id='CE' onClick={this.buttonPress.bind(this)} className="buttons">CE</button>
        <button id='CLEAR' onClick={this.buttonPress.bind(this)} className="buttons">C</button>
        <button id='back' onClick={this.buttonPress.bind(this)} className="buttons">Back</button>
        <button id='divide' onClick={this.buttonPress.bind(this)} className="buttons">/</button><br/>
        <button id='7' onClick={this.handleClick.bind(this)} className="buttons">7</button>
        <button id='8' onClick={this.handleClick.bind(this)} className="buttons">8</button>
        <button id='9' onClick={this.handleClick.bind(this)} className="buttons">9</button>
        <button id='multiply'  className="buttons">*</button> <br/>
        <button id='4' onClick={this.handleClick.bind(this)} className="buttons">4</button>
        <button id='5' onClick={this.handleClick.bind(this)} className="buttons">5</button>
        <button id='6' onClick={this.handleClick.bind(this)} className="buttons">6</button>
        <button id='minus'  className="buttons">-</button><br/>
        <button id='1' onClick={this.handleClick.bind(this)} className="buttons">1</button>
        <button id='2' onClick={this.handleClick.bind(this)} className="buttons">2</button>
        <button id='3' onClick={this.handleClick.bind(this)} className="buttons">3</button>
        <button id='add'  className="buttons">+</button><br/>
        <button id='negate'  className="buttons">neg</button>
        <button id='0' onClick={this.handleClick.bind(this)} className="buttons">0</button>
        <button id='.' onClick={this.handleClick.bind(this)} className="buttons">.</button>
        <button id='equals' className="buttons">=</button>
      </div>);
  }
}
