import React from 'react';
import Main from './components/layouts/Main'
import BbqRanks from './components/layouts/bbqranks'
import HamRanks from './components/layouts/hamranks'
import TacoRanks from './components/layouts/tacoranks'
import NewChallenger from './components/layouts/newchallenger'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = () => (
  <div>
  <Main />
  </div>
)

const Bbq = () => (
  <div>
  <BbqRanks/>
  </div>
)
const Hamburger = () => (
  <div>
  <HamRanks/>
  </div>
)

const Tacos = () => (
  <div>
  <TacoRanks/>
  </div>
)

const Challenger = () => (
  <div>
  <NewChallenger/>
  </div>
)

const AppRoutes = () => (
  <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/bbq_rankings" component={Bbq}/>
    <Route exact path="/ham_rankings" component={Hamburger}/>
    <Route exact path="/taco_rankings" component={Tacos}/>
    <Route exact path="/challenger" component={Challenger}/>
  </Switch>
  </Router>
)

export default AppRoutes;
