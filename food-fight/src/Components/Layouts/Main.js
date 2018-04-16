import React from 'react';
import Bbq from '../../components/subcomponents/BBQ'
import Burgers from '../../components/subcomponents/Burgers'
import Tacos from '../../components/subcomponents/Tacos'
import Header from './header'


export default class Main extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Bbq />
        <Burgers />
        <Tacos />

      </div>
    );
  }
}
