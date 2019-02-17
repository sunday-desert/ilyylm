import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import flowers from '../images/flowers2.gif';
import stupidCupid from '../images/stupid-cupid.gif';
import chocolate from '../images/chocolate.gif';
import './css/Pick.css';

class Pick extends Component {
  render() {
    const deg = {
      filter: `hue-rotate(${(Math.random() * 270 + 80)}deg)`
    }

    return (
      <section className="pick">
        <Title />
        <h3 style={deg}>choose one to send to your boo</h3>
        <article className="pick">
          <ul>
            <li>
              <Link to="/c/check">
                <img src={stupidCupid} alt="stupid cupid!"/>
              </Link>
            </li>
            <li>
              <Link to="/f/check">
                <img src={flowers} alt="flowers!"/>
              </Link>
            </li>
            <li>
              <Link to="/h/check">
                <img src={chocolate} alt="no calorie chocolates!"/>
              </Link>
            </li>
          </ul>
        </article>
      </section>
    );
  }
}

export default Pick;
