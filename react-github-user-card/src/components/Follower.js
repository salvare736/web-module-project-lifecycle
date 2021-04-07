import React from 'react';

class Follower extends React.Component {

  render() {
    return (
      <div className="Follower">
        <img src={this.props.follower.avatar_url} alt={this.props.follower.login} width='200px'/>
        <div className="FollowerDetails">
          <h4>{`Username: ${this.props.follower.login}`}</h4>
          <h4>{`Profile Link: `}<a href={this.props.follower.html_url}>{this.props.follower.html_url}</a></h4>
        </div>
      </div>
    );
  }
}

export default Follower;
