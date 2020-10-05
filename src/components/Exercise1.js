import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        });
    }

    alertInfo = () =>{
        alert(`Come in ${this.state.name}, you're ${this.state.age} - that's good enough`)
    }
    
    render() {
        return (
            <div>
                <input id="name-input" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <input id="age-input"  name="age"  value={this.state.age}  onChange={this.handleInputChange} />
                <button onClick={this.alertInfo}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;