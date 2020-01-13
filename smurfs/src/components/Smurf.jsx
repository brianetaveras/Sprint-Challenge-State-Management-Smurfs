import React, { Component } from "react";
import { getSmurfs, killSmurf } from "../actions/index";
import { connect } from "react-redux";
import axios from 'axios'

class Smurf extends Component {

    killSmurf = (id) =>{
        axios.delete(`http://localhost:3333/smurfs/${id}`).then(res=>{
            this.props.killSmurf(res.data)
        })
    }

  render() {
    return (
      <div className="smurf">
        <div className="name">Name: {this.props.smurf.name}</div>
        <div className="heig">Height: {this.props.smurf.height}</div>
        <div className="age">Age: {this.props.smurf.age}</div>
        <button onClick={()=>{this.killSmurf(this.props.smurf.id)}} className="kill-smurf">Kill</button>
      </div>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  {
    getSmurfs: getSmurfs,
    killSmurf: killSmurf
  }
)(Smurf);
