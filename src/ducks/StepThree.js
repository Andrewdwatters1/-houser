import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {stepThree} from './reducer';


class StepThree extends Component {
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
    return (
      <div>
        StepThree
        <Link to="/"><button>Cancel</button></Link>
        <input onChange={this.mortChange}></input>
        <input onChange={this.rentChange}></input>
        <Link to="/wizard/step2"><button onClick={() => stepThree(this.state)}>Previous Step</button></Link>
        <Link to="/"><button onClick={this.postNewHouse}>Complete</button></Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mort: state.mort,
    rent: state.rent
  }
}

export default connect(mapStateToProps, {stepThree})(StepThree);