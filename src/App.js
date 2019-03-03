import React, { Component } from "react";
import "./App.css";
import BarChart from "./component/barChart";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BarChart />
      </div>
    );
  }
}

export default App;
