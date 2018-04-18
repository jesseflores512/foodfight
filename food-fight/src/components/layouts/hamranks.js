import React from 'react';
import Header from './header'

export default class HamRanks extends React.Component {
  render(){
    return (
      <div>
      <Header />
        <h2 className="rankHeading">Burgers</h2>
          <p>Burger Champ</p>
          <p>Hopdoddy</p>
        <br/>
        <a href = '/challenger'>
          <div className="myButton">Nominate a challenger</div>
        </a>

      </div>
    )
  }
}
