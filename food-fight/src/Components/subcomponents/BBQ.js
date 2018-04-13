import React from 'react';
import '../../App.css'

const test = ()=> {
  console.log('it works dawg')
}

export default class Bbq extends React.Component {
  render(){
    return (
        <div className='ButtonMain ButtonBbq' onClick = {test}>
          <h1 className='ButtonHead'>BBQ</h1>
        </div>
    );
  }
}
