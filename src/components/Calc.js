import React from 'react';
import NumButton from '../components/NumButton';
import Display from '../components/Display';

export default class Calc extends React.Component{
  constructor(){
    super();
    this.state = {display:'0'};
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(newValue){
    const newState = {display:newValue};
    this.setState(newState);
  }

  render(){
    return(
      <div>
        <Display>{this.state.display}</Display>
        <br />
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>7</NumButton>
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>8</NumButton>
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>9</NumButton>
        <br />
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>4</NumButton>
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>5</NumButton>
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>6</NumButton>
        <br />
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>1</NumButton>
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>2</NumButton>
        <NumButton updateDisplay = {this.updateDisplay} currentDisplay = {this.state.display}>3</NumButton>
      </div>
    )
  }
}