import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      menuClicked: false
    };
    this.handleScroll = this.handleScroll.bind(this);
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

  handleScroll() {
    if (window.scrollY > 100) {
      console.log('scrolllingggg');
      this.setState({ scrolled: true });
    } else if (window.scrollY < 100) {
      console.log('not scrolllingggg');
      this.setState({ scrolled: false });
    }
  }

  render() {
    return (
      <div className="header">
        <div className='header-item'>Home</div>
        <div className='header-item'>About</div>
        <div className='header-item'>John</div>
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
