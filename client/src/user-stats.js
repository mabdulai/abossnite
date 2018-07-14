import React, { Component } from 'react';

class UserStats extends Component {
  getTotalKills(stats) {
    if (stats.solo) {
      return stats.solo.kills.valueInt +
             stats.duo.kills.valueInt +
             stats.squads.kills.valueInt
    }
    return '0'
  }

  render() {
    return (
      <div className="user-stats">
        <h2>
          {this.props.user} Total kills!
        </h2>
        <div className="total-kills">
          {this.getTotalKills(this.props.stats)}
        </div>
      </div>
    );
  }
}

export default UserStats;