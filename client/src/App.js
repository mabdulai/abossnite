import React, { Component } from "react";
import UserStats from "./user-stats";
import "./App.css";

const emptyData = {
  kills: {
    valueInt: 0
  }
}
class App extends Component {
  state = {
    mika: {},
    thomas: {},
    mikaLoading: true,
    thomasLoading: true
  };
  componentDidMount() {
    fetch("/mika")

    .then(res => res.json())
      .then(data => {
        const user = JSON.parse(data);
        const { curr_p2 = emptyData, curr_p10 = emptyData, curr_p9 = emptyData } = user.stats;
        this.setState({
          mikaLoading: false,
          mika: {
            solo: curr_p2,
            duo: curr_p10,
            squads: curr_p9
          }
        });
      });
    fetch("/thomas")
      .then(res => res.json())
      .then(data => {
        const user = JSON.parse(data);
        console.log("thomas", user);
        const { curr_p2 = emptyData, curr_p10 = emptyData, curr_p9 = emptyData } = user.stats;
        this.setState({
          thomasLoading: false,
          thomas: {
            solo: curr_p2,
            duo: curr_p10,
            squads: curr_p9
          }
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">ABOSSNITE</header>
        <main>
          {!this.state.mikaLoading && (
            <UserStats stats={this.state.mika} user="Mika" />
          )}
          {!this.state.thomasLoading && (
            <UserStats stats={this.state.thomas} user="Thomas" />
          )}
        </main>
      </div>
    );
  }
}

export default App;
