import React from 'react';

export default class Bbq extends React.Component {
  render(){
    return (
        <div className='ButtonMain ButtonBbq'>
          <a href="/bbq_rankings">
            <h1 className='ButtonHead'>BBQ</h1>
          </a>
          <div className="foodframe"> <img className="BBQ foods" src={require("../../images/pixelsteak.png")} alt="BBQ Logo"/></div>
        </div>




    );
  }
}
