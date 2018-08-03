import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


export default class StepTwo extends Component {
  constructor() {
    super()
    this.state = {
      img: '',
    }
    this.imgChange = this.imgChange.bind(this);
  }

  imgChange(e) {
    this.setState({
      img: e.target.value
    })
  }

  render() {
    return (
      <div>
        StepTwo
        <Link to="/"><button>Cancel</button></Link>
        <input onChange={this.imgChange}></input>
        <Link to="/wizard/step1"><button>Previous Step</button></Link>
        <Link to="/wizard/step3"><button>Next Step</button></Link>
      </div>
    )
  }
}