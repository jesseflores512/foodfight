import React from 'react';
import Header from './components/layouts/header';
import Main from './components/layouts/main';

// import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      // <Router>
        <div>
          <Header />
          <Main />
        </div>
      // </Router>
    );
  }
}
export default App;
