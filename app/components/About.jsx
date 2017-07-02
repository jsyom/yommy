import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About">
        Hello, World! I'm a software developer and designer.
        <div className='About-header' />
        <div className='About-editor'>
          <div className='About-items'>
            ~ whoami <br/>
            <span>&nbsp;&nbsp; => John Yom</span>
          </div>
          <div className='About-items'>
            ~ $HOME <br/>
            <span>&nbsp;&nbsp; => 28 Grattan Street New Hyde Park, NY 11040</span>
          </div>
          <div className='About-items'>
            ~ Education <br/>
            <span>&nbsp;&nbsp; => Fullstack Acadey</span><br/>
            <span>&nbsp;&nbsp; => Drexel University College of Nursing</span><br/>
            <span>&nbsp;&nbsp; => Stony Brook University</span>
          </div>
          <div className='About-items'>
            ~ Skills <br/>
            <span>&nbsp;&nbsp; => ["Javascript(ES6)", "React", "Redux", "Node", "Express", "PostgreSQL"]</span><br/>
          </div>
          <div className='About-items'>
            ~ Projects <br />
            <span>&nbsp;&nbsp; => Code Battle</span><br/>
            <span>&nbsp;&nbsp; => Grace Shopper</span><br/>
            <span>&nbsp;&nbsp; => Hackathon</span><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
