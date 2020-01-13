import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/'
import axios from 'axios'

class AddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleChange = (e) =>{
        switch(e.target.name){
            case 'name':
                this.setState({
                    ...this.state,
                    name: e.target.value
                })
            break;
            case 'height':
                this.setState({
                    ...this.state,
                    height: e.target.value
                })
            break;
            case 'age':
                this.setState({
                    ...this.state,
                    age: e.target.value
                })
            break;
            default:
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        if (this.state.name && this.state.height && this.state.age){
            axios.post('http://localhost:3333/smurfs', {
                name: this.state.name,
                height: this.state.height,
                age: this.state.age
            }).then(res=>{
                this.props.addSmurf(res.data)
                this.setState({
                    name: '',
                    height: '',
                    age: ''
                })
            })

        } else {
            alert('All fields are required')
        }
    }


    render(){
        return (
            <div className="add-form">
                <form onSubmit={this.handleSubmit} name="add-form">
                    <input onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" type="text"/>
                    <input onChange={this.handleChange} value={this.state.height} name="height" placeholder="Height" type="text"/>
                    <input onChange={this.handleChange} value={this.state.age} name="age" placeholder="Age" type="text"/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default connect(state=>{
    return {

    }
}, {addSmurf: addSmurf})(AddForm)