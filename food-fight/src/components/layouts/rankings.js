import React from 'react';

export default class Ranking extends React.Component {
  render(){
    return (
      <div>
        <h1>2018 RANKINGS</h1>
        <h2>Tacos</h2>
          <img className="Tacos" src="/food-fight/images/pixeltaco.png" alt="Taco Logo"/>
          <p>Taco Champ</p>
          <p>Torchy's Tacos</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
        <h3>Burgers</h3>
        <img className="Burgers" src="../food-fight/images/pixelburger.png" alt="Burger Logo"/>
          <p>Burger Champ</p>
          <p>Hopdoddy</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
        <h4>BBQ</h4>
        <img className="BBQ" src="./pixelsteak2.png" alt="BBQ Logo"/>
          <p>BBQ Champ</p>
          <p>LA Barbeque</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
      </div>
    )
  }
}
