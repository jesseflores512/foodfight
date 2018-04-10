import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import Main from './Components/Layouts/Main';
import subcomponents from './Components/subcomponents'

export default class extends Component {
  render() {
    return <Fragment>
        <Header/>

        <Main/>

        <subcomponents/>
      </Fragment>

  }
}
