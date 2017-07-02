import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='Footer' onClick={() => this.scrollToTop()}>
        Footer
      </div>
    );
  }
}

export default Footer;
