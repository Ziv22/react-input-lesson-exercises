import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
    this.handleChange = this.handleChange.bind(this)
}
handleChange = event =>{    
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({[name]: value}, ()=>{
        console.log(`${this.state.name} selected ${this.state.fruit}`)
    })

}
    
render() {
    return (
        <div>
            <input id="name-input" name="name" onChange={this.handleChange}/>
            <select id="select-input" name="fruit" onChange={this.handleChange}>
                <option value="Banana">Banana</option>
                <option value="Kiwi">Kiwi</option>
                <option value="Apple">Apple</option>
                <option value="Orange ">Orange </option>
            </select>
        </div>
    );
}
}

export default Exercise2;