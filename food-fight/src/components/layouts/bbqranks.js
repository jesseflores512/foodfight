import React from 'react';
import Header from './header'

export default class BbqRanks extends React.Component {
  render(){
    return (
      <div>
      <Header />
        <h2 className="rankHeading">BBQ</h2>
          <p>BBQ Champ</p>
          <p>LA Barbeque</p>
        <br/>
          <div className="myButton">Nominate a challenger</div>
      </div>
    )
  }
}
