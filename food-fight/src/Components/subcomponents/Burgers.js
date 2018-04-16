import React from 'react';

export default class Burgers extends React.Component {
  render(){
    return (
      <div className = 'ButtonMain ButtonBurger'>
        <a href='/ham_rankings'>
          <h1 className= 'ButtonHead'>Burgers</h1>
        </a>
        <img className="Burgers foods" src={require("../../images/pixelburger.png")} alt="Burger Logo"/>
      </div>
    );
  }
}
