import React from 'react';
import Header from './header'

export default class TacoRanks extends React.Component {
  render(){
    return (
      <div>
      <Header />
        <h1 className="rankHeading">2018 RANKINGS</h1>
        <h2 className="rankHeading">Tacos</h2>
          <p>Taco Champ</p>
          <p>Torchy's Tacos</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
        <hr/>
        <h2 className="rankHeading">Burgers</h2>
          <p>Burger Champ</p>
          <p>Hopdoddy</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
        <h2 className="rankHeading">BBQ</h2>
          <p>BBQ Champ</p>
          <p>LA Barbeque</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
      </div>
    )
  }
}
