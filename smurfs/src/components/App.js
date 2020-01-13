import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";
import axios from "axios";

class App extends Component {
  componentWillMount(props){
    axios.get("http://localhost:3333/smurfs").then(res => {
      this.props.getSmurfs(res.data);
    });
  }
 
  render(props) {
    return (
      <div className="App">
        <h1 className="population-counter">
          Welcome to Smurf Town. Population: {this.props.smurfs.length}
        </h1>

        <SmurfList />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      smurfs: state.smurfs
    };
  },
  { getSmurfs: getSmurfs }
)(App);
