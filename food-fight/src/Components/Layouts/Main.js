import React from 'react';
import Bbq from '../../components/subcomponents/Bbq'
import Burgers from '../../components/subcomponents/Burgers'
import Tacos from '../../components/subcomponents/Tacos'

export default class Main extends React.Component {
  render(){
    return (
      <div>
        <h2>content here</h2>
        <Bbq />
        <Burgers />
        <Tacos />

      </div>
    );
  }
}
