import React from 'react';
import axios from 'axios';

import FollowersList from './components/FollowersList';
import './App.css';

class App extends React.Component {
  state = {
    myAvatar: '',
    myName: '',
    myUsername: '',
    myLocation: '',
    myProfile: '',
    myFollowers: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/salvare736')
      .then(resp => {
        this.setState({
          myAvatar: resp.data.avatar_url,
          myName: resp.data.name,
          myUsername: resp.data.login,
          myLocation: resp.data.location,
          myProfile: resp.data.html_url,
        })
      })
      .catch(err => {
        console.log(err);
      });
    axios.get('https://api.github.com/users/salvare736/followers')
      .then(resp => {
        this.setState({
          myFollowers: resp.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.myFollowers.length !== 0) {
      return (
        <div className="AppContainer">
          <h1>My Github Info!</h1>
          <img src={this.state.myAvatar} alt='avatar' />
          <h3>{`Name: ${this.state.myName}`}</h3>
          <h4>{`Username: ${this.state.myUsername}`}</h4>
          <h4>{`Location: ${this.state.myLocation}`}</h4>
          <h4>{`Profile Link: `}<a href={this.state.myProfile}>{this.state.myProfile}</a></h4>
          <div className="FollowersListContainer">
            <FollowersList followers={this.state.myFollowers}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="AppContainer">
          <p>Loading data...</p>
        </div>
      );
    }
  }
}

export default App;
