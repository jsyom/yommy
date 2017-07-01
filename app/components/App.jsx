import React, { Component } from 'react';
import Header from './Header';
import Jumbo from './Jumbo';
import About from './About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Jumbo />
        <About />
      </div>
    );
  }
}
