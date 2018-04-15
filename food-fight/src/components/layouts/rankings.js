import React from 'react';


export default class Ranking extends React.Component {
  render(){
    return (
      <div>
        <h1>2018 RANKINGS</h1>
        <h2>Tacos</h2>
          <p>Taco Champ</p>
          <p>Torchy's Tacos</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
        <hr/>
        <h2>Burgers</h2>
          <p>Burger Champ</p>
          <p>Hopdoddy</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
        <h2>BBQ</h2>
          <p>BBQ Champ</p>
          <p>LA Barbeque</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
      </div>
    )
  }
}
