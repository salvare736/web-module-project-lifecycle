import React from 'react';

import Follower from './Follower';

class FollowersList extends React.Component {

  render() {
    return (
      <div className="FollowersList">
        <h2>My Followers:</h2>
        <div className="FollowersContainer">
          {this.props.followers.map(follower => (
            <Follower key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default FollowersList;
