import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details/Details';
import './App.css';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:TvshowId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;


