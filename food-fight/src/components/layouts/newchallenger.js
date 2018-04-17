import React from 'react';
import Header from './header'

export default class NewChallenger extends React.Component {
  render() {
    return (
    <div>
    <Header/>
      <h3 className="NewChallenger">Nominate New Challenger</h3>

        <div className="myButton">Nominate a challenger</div>
    </div>
  )}
}
