import React, {Component} from 'react';

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

export default Smurf