import React from 'react';
import Header from './components/layouts/header'
import Main from './components/layouts/Main'
import Ranking from './components/layouts/rankings'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Header />
          {/* <Main /> */}
          <Ranking />
        </div>
      </Router>
    );
  }
}
