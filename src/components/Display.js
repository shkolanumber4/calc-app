import React from 'react';

export default class Display extends React.Component{
  render(){
    return(
      <input type="text" value={this.props.children}></input>
    )
  }
}