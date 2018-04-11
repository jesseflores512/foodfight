import React from 'react';
import Header from './components/layouts/header'
import Main from './components/layouts/Main'
export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
