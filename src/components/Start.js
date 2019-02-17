import React, { Component } from 'react';
import { Link } from "react-router-dom";
import front from '../images/front.png';

class Start extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      loaded: false
    }
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    this.setState({ loaded: false });
    window.clearTimeout();
  }

  switching() {
    setTimeout(() => {
      if (this.state.x > 360) {
        this.setState({ x: 0 });
      } else {
        let x = this.state.x + 70;
        this.setState({ x });
      }
    }, 888);
  }

  render() {
    if (this.state.loaded) this.switching();

    return (
      <section className="start">
        <Link to="/pick">
          <img
            src={front}
            alt="I Love You, You Love Me"
            style={{
              filter: `hue-rotate(${this.state.x}deg)`
            }}
          />
        </Link>
      </section>
    );
  }
}

export default Start;
