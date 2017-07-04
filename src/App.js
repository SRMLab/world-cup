import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './components/Home';
import Tournament from './components/Tournament';
import Upload from './components/Upload';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/upload" component={ Upload } />
            <Route path="/tournament/:gender" component={ Tournament } />
            <Route path="/" component = { Home } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
