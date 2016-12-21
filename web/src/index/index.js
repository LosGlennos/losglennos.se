import React, { Component } from 'react';
import Welcomer from '../welcomer/welcomer.js';
import Navigation from '../navigation/navigation.js';

class Index extends Component {
  render() {
    return (
      <div className="aligned center inverted segment ui vertical">
        <Navigation/>
        <Welcomer/>
      </div>
    )
  }
}

export default Index;