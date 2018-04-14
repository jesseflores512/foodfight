import React from 'react';
import Header from './components/layouts/header'
import Main from './components/layouts/main'
import Ranking from './components/layouts/rankings'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        {/* <Main /> */}
        <Ranking />
      </div>
    );
  }
}
