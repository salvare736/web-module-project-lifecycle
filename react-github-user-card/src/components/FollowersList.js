import React from 'react';

import Follower from './Follower';

class FollowersList extends React.Component {

  render() {
    return (
      <div className="FollowersList">
        <h2>My Followers:</h2>
        <div className="FollowersContainer">
          <Follower />
        </div>
      </div>
    );
  }
}

export default FollowersList;
