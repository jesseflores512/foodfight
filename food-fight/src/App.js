import React from 'react';
import Main from './components/layouts/Main'
import Ranking from './components/layouts/ranking'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = () => (
  <div>
  <Main />
  </div>
)

const Ranks = () => (
  <div>
  <Ranking/>
  </div>
)

const AppRoutes = () => (
  <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rankings" component={Ranks}/>
  </Switch>
  </Router>
)

export default AppRoutes;
// export default () => <Routes/>
