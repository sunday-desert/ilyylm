import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import Title from './Title';
import flowers from '../images/flowers2.gif';
import cupid from '../images/stupid-cupid.gif';
import chocolate from '../images/chocolate.gif';
import './css/Check.css';

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sel: props.match.params.sel
    }

    this.copyLink = this.copyLink.bind(this);
  }

  copyLink(e) {
    e.preventDefault();
    e.target.select();
    document.execCommand("copy");

    document.getElementById('prompt').innerHTML = 'copied!';
  }

  render() {
    const flavors = new Map([
      ['c', [cupid, 'stupidcupid']],
      ['f', [flowers, 'flowers4u']],
      ['h', [chocolate, 'chocolates4u']]
    ]);

    return !flavors.has(this.state.sel)
      ? <Redirect to="/nah"/>
      : (
        <section className="check">
          <Title />
          <article className="left">
            <img src={flavors.get(this.state.sel)[0]} alt="confirm your selection"/>
          </article>
          <article className="right">
            <p id="prompt">click to copy link & send to your friends</p>
            <p><input
              className="msg"
              onClick={this.copyLink}
              readOnly={true}
              value={`sunday-desert.github.io/#/luv/${flavors.get(this.state.sel)[1]}`}
            /></p>
            <p><Link to="/pick">-- now send one to your other boo</Link></p>
          </article>
        </section>
      );
  }
}

export default Check;
