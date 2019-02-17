import React, { Component } from 'react';
import Title from './Title';

class Nah extends Component {
  render() {
    const deg = {
      filter: `hue-rotate(${(Math.random() * 270 + 100) + 130}deg)`
    }

    return (
      <section>
        <Title style={deg}/>
        <p>come on, lets get back to the main page</p>
        <p>figure it out yourself</p>
      </section>
    );
  }
}

export default Nah;
