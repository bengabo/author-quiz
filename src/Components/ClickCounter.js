import React, { Component } from 'react';

export default class ClickCounter extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicks: 0
    }
  }

  render(){
    return(
    <>
      <p>this div has been clicked <button onClick={() => {
        this.setState({clicks: this.state.clicks + 1});
      }}>{this.state.clicks}</button> times</p>
      <button onClick={() => {
        if (this.state.clicks) {
          this.setState({clicks: this.state.clicks - 1})
        } else {

        }
      }}>-</button>
      <button onClick={() => {
        this.setState({clicks: this.state.clicks + 1});
      }}>+</button>
    </>
    )
  }

}