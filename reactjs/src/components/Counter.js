  
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    if(this.state.clicks!==0)
        this.setState({ clicks: this.state.clicks - 1 });
    return 
  }

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>+</button>
        <button onClick={this.DecreaseItem}>_</button>
        <h2>{ this.state.clicks }</h2> 
      </div>
    );
  }
}

export default Counter;