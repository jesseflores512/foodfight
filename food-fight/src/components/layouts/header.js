import React from 'react';
import '../../App.css'

export default class Header extends React.Component {
  render(){
    return (
      <div>
        <a href='/' className='homebutton'>
          <button>Home</button>
        </a>
        <h2 className='Header'>FOOD FIGHT</h2>
      </div>
    );
  }
}
