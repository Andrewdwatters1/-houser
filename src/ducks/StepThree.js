import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


export default class StepThree extends Component {
  constructor() {
    super()
    this.state = {
      mort: 0,
      rent: 0
    }
    this.mortChange = this.mortChange.bind(this);
    this.rentChange = this.rentChange.bind(this);
  }

  mortChange(e) {
    this.setState({
      mort: e.target.value
    })
  }
  rentChange(e) {
    this.setState({
      rent: e.target.value
    })
  }

  postNewHouse = () => {
    let houseToAdd = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    axios.post('http://localhost:4007/api/realestate/', { houseToAdd }).then(() => {
    this.props.history.push("/")
  })
  }

  render() {
    console.log(this);
    return (
      <div>
        StepThree
        <Link to="/"><button>Cancel</button></Link>
        <input onChange={this.mortChange}></input>
        <input onChange={this.rentChange}></input>
        <Link to="/wizard/step2"><button>Previous Step</button></Link>
        <Link to="/"><button onClick={this.postNewHouse}>Complete</button></Link>
      </div>
    )
  }
}