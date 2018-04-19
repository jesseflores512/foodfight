import React from 'react';

export default class Tacos extends React.Component {
  render(){
    return (
      <div className='ButtonMain ButtonTaco'>
        <a href='/taco_rankings'>
          <h1 className='ButtonHead'>Tacos</h1>
        </a>
        {/* <img className="Tacos foods" src={require("../../images/pixeltaco.png")} alt="Taco Logo"/> */}
      </div>
    );
  }
}
