import React, {Component} from 'react';
import {connect} from 'react-redux'
import Smurf from './Smurf'


class SmurfList extends Component {
    render(){
        return(
            <div className="smurf-list">
                {this.props.smurfs.map(smurf=>{
                    return <Smurf smurf={smurf} key={smurf.id} />
                })}
            </div>
        )
    }


}


export default connect(state=>{
    return {
        smurfs: state.smurfs
    }
})(SmurfList);