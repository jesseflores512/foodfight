import React from 'react';
import Header from './header'
import axios from 'axios';

export default class BbqRanks extends React.Component {

  constructor(props) {
      super(props);
      this.tabRow = this.tabRow.bind(this);
      this.state = {serverports: [],
                    name: ''};
    }
    componentDidMount(){
      axios.get('http://localhost:4200/serverport')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.serverports.map(function(object, i){
            return (<li>{object.name} location: {object.address} {object.city}, {object.state}</li>);
        });
    }

  render(){
    return (
      <div>
      <Header />
        <h2 className="rankHeading">BBQ</h2>
          <ol>
            {this.tabRow()}
          </ol>
        <br/>
        <a href = '/challenger'>
          <div className="myButton">Nominate a challenger</div>
        </a>
      </div>
    )
  }
}
