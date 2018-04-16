import React from 'react';
import '../../App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ranking from '../layouts/ranking'

const Ranks = () => (
  <div>
  <Ranking/>
  </div>
)
export default class Bbq extends React.Component {
  render(){
    return (

        <div className='ButtonMain ButtonBbq'>
        <a href="/rankings">
          <h1 className='ButtonHead'>BBQ</h1>
        </a>
          <div className="foodframe"> <img className="BBQ foods" src={require("../../images/pixelsteak.png")} alt="BBQ Logo"/></div>

        </div>




    );
  }
}
