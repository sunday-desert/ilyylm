import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Title from './Title';
import flowers from '../images/flowers.gif';
import cupid from '../images/stupid-cupid.gif';
import chocolate from '../images/chocolate.gif';

class Enjoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.match.params.note
    }
  }

  render() {
    const flavors = new Map([
      ['stupidcupid', [cupid, 'don\'t aim at me, i don\'t like you']],
      ['flowers4u', [flowers, 'love you as a friend']],
      ['chocolates4u', [chocolate, 'bite me instead']]
    ]);

    return !flavors.has(this.state.note)
      ? <Redirect to="/nah"/>
      : (
        <section className="check">
          <Title />
          <article className="left">
            <img src={flavors.get(this.state.note)[0]} alt="confirm your selection"/>
          </article>
          <article className="right">
            <p id="punchline">{flavors.get(this.state.note)[1]}</p>
            <p>figure out how to get back to main page and send one back to me</p>
          </article>
        </section>
      );
  }
}

export default Enjoy;
