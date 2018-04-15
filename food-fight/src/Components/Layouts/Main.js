import React from 'react';
import Bbq from '../../components/subcomponents/BBQ'
import Burgers from '../../components/subcomponents/Burgers'
import Tacos from '../../components/subcomponents/Tacos'

export default class Main extends React.Component {
  render(){
    return (
      <div>
        <Bbq />
        <Burgers />
        <Tacos />

      </div>
    );
  }
}


class Ranking extends React.Component {
  render(){
    return (
      <div>
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
