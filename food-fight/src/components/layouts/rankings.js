import React from 'react';

export default class Ranking extends React.Component {
  render(){
    return (
      <div>
        <h1>2018 RANKINGS</h1>
        <h2>Tacos</h2>
          <img className="Tacos" src="../food-fight/images/pixeltaco.png" alt="Taco Logo"/>
          <p>Taco Champ</p>
        <br/>
          <button type="button" name="myButton">Nominate contender</button>
        <h3>Burgers</h3>
        <img className="Burgers" src="../food-fight/images/pixelburger.png" alt="Taco Logo"/>
          <p>Burger Champ</p>
        <br/>
          <button type="button" name="myButton">Nominate contender</button>
        <h4>BBQ</h4>
        <img className="BBQ" src="../food-fight/images/pixelsteak2.png" alt="Taco Logo"/>
          <p>BBQ Champ</p>
        <br/>
          <button type="button" name="myButton">Nominate contender</button>
      </div>
    )
  }
}
