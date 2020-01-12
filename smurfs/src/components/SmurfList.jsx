import React, {Component} from 'react';
import {connect} from 'react-redux'


class SmurfList extends Component {
    constructor(props){
        super(props);
        this.state = {
            smurfs: props.smurfs
        }
    };
    
    render(){
        return(
            <div className="smurf-list">

            </div>
        )
    }
}


export default connect(state=>{
    return {
        smurfs: state.smurfs
    }
})(SmurfList);