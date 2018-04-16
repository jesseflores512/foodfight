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
      <Router>
        <div className='ButtonMain ButtonBbq'>
        <Link to="/rankings">
          <h1 className='ButtonHead'>BBQ</h1>
        </Link>
          <div className="foodframe"> <img className="BBQ foods" src={require("../../images/pixelsteak.png")} alt="BBQ Logo"/></div>
          <Route exact path="/rankings" component={Ranks}/>
        </div>
      </Router>



    );
  }
}
