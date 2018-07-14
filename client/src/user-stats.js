import React, { Component } from "react";

class UserStats extends Component {
  getTotalKills(stats) {
    if (stats.solo) {
      const {
        solo: {
          kills: { valueInt: soloKills = 0 }
        },
        duo: {
          kills: { valueInt: duoKills = 0 }
        },
        squads: {
          kills: { valueInt: squadKills = 0 }
        }
      } = this.stats;
      return soloKills + duoKills + squadKills;
    }
    return "0";
  }

  render() {
    return (
      <div className="user-stats">
        <h2>{this.props.user} Total kills!</h2>
        <div className="total-kills">
          {this.getTotalKills(this.props.stats)}
        </div>
      </div>
    );
  }
}

export default UserStats;
