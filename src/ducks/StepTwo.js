import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {stepTwo} from './reducer';


class StepTwo extends Component {
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
        <Link to="/wizard/step1"><button onClick={() => stepTwo(this.state)}>Previous Step</button></Link>
        <Link to="/wizard/step3"><button onClick={() => stepTwo(this.state)}>Next Step</button></Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    img: state.img
  }
}

export default connect(mapStateToProps, {stepTwo})(StepTwo);