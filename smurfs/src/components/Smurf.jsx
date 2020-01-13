import React, {Component} from 'react';
import {getSmurfs} from '../actions/index';
import {connect} from 'react-redux';

class Smurf extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="smurf">
    <div className="name">Name: {this.props.smurf.name}</div>
                    <div className="heig">Height: {this.props.smurf.height}</div>
                </div>
        )
    }
}

export default connect(state=>{
    return {

    }
}, {getSmurfs: getSmurfs})(Smurf);