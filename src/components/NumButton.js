import React from 'react';

export default class NumButton extends React.Component{
  constructor(){
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
    clickHandler(){
      const currentDisplay = this.props.currentDisplay;
      let displayValue = 0;
      const number = this.props.children;

      if(currentDisplay==='0')
      {
        displayValue = number;
      }
      else{
        displayValue = currentDisplay + number;
      }


      this.props.updateDisplay(displayValue);
    }
  render(){
    return(
      
      <button onClick={this.clickHandler}>{this.props.children}</button>
    )
  }
}