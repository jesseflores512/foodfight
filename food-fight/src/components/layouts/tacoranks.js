import React from 'react';
import Header from './header'

export default class TacoRanks extends React.Component {
  render(){
    return (
      <div>
      <Header />
        <h2 className="rankHeading">Tacos</h2>
          <p>Taco Champ</p>
          <p>Torchy's Tacos</p>
        <br/>
          <a href = '/challenger'>
            <div className="myButton">Nominate a challenger</div>
          </a>
      </div>
    )
  }
}
