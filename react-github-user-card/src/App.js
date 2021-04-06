import React from 'react';
import axios from 'axios';

import FollowersList from './components/FollowersList';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="AppContainer">
        <h1>My Github Data!</h1>
        <div className="FollowerListContainer">
          <FollowersList />
        </div>
      </div>
    );
  }
}

export default App;
