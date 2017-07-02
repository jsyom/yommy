import React, { Component } from 'react';
import Header from './Header';
import Jumbo from './Jumbo';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

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
        <Projects />
        <Footer />
      </div>
    );
  }
}
