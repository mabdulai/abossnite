import React, { Component } from "react";
import UserStats from "./user-stats";
import "./App.css";

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
        console.log("mika", user);
        this.setState({
          mikaLoading: false,
          mika: {
            solo: user.stats.curr_p2 = 0,
            duo: user.stats.curr_p10 = 0,
            squads: user.stats.curr_p9 = 0
          }
        });
      });
    fetch("/thomas")
      .then(res => res.json())
      .then(data => {
        const user = JSON.parse(data);
        console.log("thomas", user);
        this.setState({
          thomasLoading: false,
          thomas: {
            solo: user.stats.curr_p2 = 0,
            duo: user.stats.curr_p10 = 0,
            squads: user.stats.curr_p9 = 0
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
