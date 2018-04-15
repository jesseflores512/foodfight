import React from 'react';

export default class Tacos extends React.Component {
  render(){
    return (
      <div className='ButtonMain ButtonTaco'>
        <h1 className='ButtonHead'>Tacos</h1>
        <img className="Tacos foods" src={require("../../images/pixeltaco.png")} alt="Taco Logo"/>
      </div>
    );
  }
}
