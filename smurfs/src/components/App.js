import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList'
import {connect} from 'react-redux'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      smurfs: props.smurfs
    }

  }
  render(props) {
    return (
      <div className="App">
  <h1 className="population-counter">Welcome to Smurf Town. Population: {this.state.smurfs.length}</h1>
        <SmurfList />
      </div>
    );
  }
}

export default connect(state=>{
  return {
    smurfs: state.smurfs
  }
})(App);
