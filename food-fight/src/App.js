import React, { Component, Fragment } from 'react';
import Header from './components/layouts/header';
import Main from './components/layouts/Main';
import Subcomponents from './components/subcomponents'

export default class extends Component {
  render() {
    return <Fragment>
        <Header/>

        <Main/>

        <Subcomponents/>
      </Fragment>

  }
}
