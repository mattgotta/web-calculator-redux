/*
    ./client/components/App.jsx
*/
import React from 'react';
import {connect} from 'react-redux';

import {setOperatorDisplay, handleOperator, buttonPress, handleClick, handleUserInput} from '../actions/operatorActions';

@connect((store) => {
  return {
    firstInput: store.operator.firstInput,
    userInput: store.operator.userInput,
    multiplication: store.operator.multiplication,
    division: store.operator.division,
    subtraction: store.operator.subtraction,
    addition: store.operator.addition,
    operatorDisplay: store.operator.operatorDisplay,
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
  displayOperator() {
    switch(true) {
      case (this.props.multiplication): {
        return this.props.firstInput + "X"
      }
      case (this.props.division): {
        return this.props.firstInput + "/"
      }
      case (this.props.subtraction): {
        return this.props.firstInput + "-"
      }
      case (this.props.addition): {
        return this.props.firstInput + "+"
        console.log(this.props.firstInput)
      }
      return this.props.firstInput
    }
  }
  returnEquals() {
    if (this.props.addition == true){
      let first = parseFloat(this.props.firstInput);
      let second = parseFloat(this.props.userInput);
      var secretOutput = first + second;
      return secretOutput;
    }
    else if (this.props.subtraction == true) {
      let first = parseFloat(this.props.firstInput);
      let second = parseFloat(this.props.userInput);
      var secretOutput = first - second;
      return secretOutput;
    }
    else if (this.props.division == true) {
      let first = parseFloat(this.props.firstInput);
      let second = parseFloat(this.props.userInput);
      var secretOutput = first / second;
      return secretOutput;
    }
    else if (this.props.multiplication == true) {
      let first = parseFloat(this.props.firstInput);
      let second = parseFloat(this.props.userInput);
      var secretOutput = first * second;
      return secretOutput;
    }
  }
  handleOperator(e) {
    if (this.props.multiplication || this.props.division ||
    this.props.addition || this.props.subtraction) {
      var a = this.returnEquals();
      var type = e.target.id + 'CHAIN'
      this.props.dispatch(handleOperator(type, a))
      this.props.dispatch(setOperatorDisplay(type))
    }
    else {
      var type = e.target.id
      this.props.dispatch(handleOperator(type))
      this.props.dispatch(setOperatorDisplay(type))
    }
  }
  render() {
    return (
     <div style={{textAlign: 'center'}} className="calc">
        <h3 className="title">Crapulator</h3>
        <h2 className="back">{this.props.firstInput + this.props.operatorDisplay}</h2>
        <input
         value={this.props.userInput}
         type="text"
         className="input"
         onChange={this.handleUserInput.bind(this)} /><br/>
        <button id='SQRT' onClick={this.buttonPress.bind(this)} className="buttonsTop">sqrt</button>
        <button id='SQUARE' onClick={this.buttonPress.bind(this)} className="buttonsTop">^2</button>
        <button id='INVERT' onClick={this.buttonPress.bind(this)} className="buttonsTop">1/x</button><br/>
        <button id='CE' onClick={this.buttonPress.bind(this)} className="buttons">CE</button>
        <button id='CLEAR' onClick={this.buttonPress.bind(this)} className="buttons">C</button>
        <button id='BACK' onClick={this.buttonPress.bind(this)} className="buttons">Back</button>
        <button id='DIVIDE' onClick={this.handleOperator.bind(this)} className="buttons">/</button><br/>
        <button id='7' onClick={this.handleClick.bind(this)} className="buttons">7</button>
        <button id='8' onClick={this.handleClick.bind(this)} className="buttons">8</button>
        <button id='9' onClick={this.handleClick.bind(this)} className="buttons">9</button>
        <button id='MULTIPLY' onClick={this.handleOperator.bind(this)} className="buttons">*</button> <br/>
        <button id='4' onClick={this.handleClick.bind(this)} className="buttons">4</button>
        <button id='5' onClick={this.handleClick.bind(this)} className="buttons">5</button>
        <button id='6' onClick={this.handleClick.bind(this)} className="buttons">6</button>
        <button id='MINUS' onClick={this.handleOperator.bind(this)} className="buttons">-</button><br/>
        <button id='1' onClick={this.handleClick.bind(this)} className="buttons">1</button>
        <button id='2' onClick={this.handleClick.bind(this)} className="buttons">2</button>
        <button id='3' onClick={this.handleClick.bind(this)} className="buttons">3</button>
        <button id='ADD' onClick={this.handleOperator.bind(this)} className="buttons">+</button><br/>
        <button id='NEGATE' onClick={this.buttonPress.bind(this)} className="buttons">neg</button>
        <button id='0' onClick={this.handleClick.bind(this)} className="buttons">0</button>
        <button id='.' onClick={this.handleClick.bind(this)} className="buttons">.</button>
        <button id='EQUALS' onClick={this.buttonPress.bind(this)} className="buttons">=</button>
      </div>);
  }
}
