import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      menuClicked: false,
      scrollPosition: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onMenuClick() {
    console.log(this.state.menuClicked);
    this.setState({
      menuClicked: !this.state.menuClicked
    });
  }

  scrollToBottom() {
    console.log('scrolling To Bottom');
    window.scrollTo(5000, 5000);
  }
  scrollToTop() {
    console.log('scrolling To Top');
    window.scrollTo(0, 0);
  }
  handleScroll() {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else if (window.scrollY < 100) {
      this.setState({ scrolled: false });
    }
  }

  render() {
    return (
      <div className="header">
        <div className='header-item'>Home</div>
        <div className='header-item'>About</div>
        <div className='header-item'>John</div>
        <div className='header-item' onClick={() => this.scrollToBottom() } >Scroll Button to Bottom</div>
        <div className='header-item' onClick={() => this.scrollToTop() } >Scroll Button to Top</div>
        <div onClick={() => this.onMenuClick()} className='menu-item'>
          {
            this.state.menuClicked
            ? <i className="fa fa-cog" aria-hidden="true"></i>
            : <i className="fa fa-bars" aria-hidden="true"></i>
          }
        </div>
      </div>
    );
  };
}

export default Header;
