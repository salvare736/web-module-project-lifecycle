import React from 'react';
import axios from 'axios';

import FollowersList from './components/FollowersList';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="AppContainer">
        <h1>My Github Info!</h1>
        <img src='https://avatars.githubusercontent.com/u/77025344?v=4' alt='avatar' />
        <h3>{`Name: Sergio Alvarez`}</h3>
        <h4>{`Username: salvare736`}</h4>
        <h4>{`Location: South Florida`}</h4>
        <h4>{`Profile Link: `}<a href={`https://github.com/salvare736`}>{`https://github.com/salvare736`}</a></h4>
        <div className="FollowerListContainer">
          <FollowersList />
        </div>
      </div>
    );
  }
}

export default App;
