import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Start from './components/Start';
import Pick from './components/Pick';
import Check from './components/Check';
import Enjoy from './components/Enjoy';
import Nah from './components/Nah';
import './App.css';

class App extends Component {
  render() {
    const deg = {
      filter: `hue-rotate(${Math.random() * 400 + 120}deg)`
    }

    return (
      <div style={deg} className="App">
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/pick" component={Pick} />
          <Route exact path="/:sel/check" component={Check} />
          <Route exact path="/luv/:note" component={Enjoy} />
          <Route component={Nah} />
        </Switch>
        <div id="sundes"><a href="https://sunday-desert.github.io/" target="_blank" rel="noopener noreferrer">♡</a></div>
      </div>
    );
  }
}

export default App;
