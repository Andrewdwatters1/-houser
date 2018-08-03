import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {stepOne} from './reducer';

class StepOne extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
    this.nameChange = this.nameChange.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.zipChange = this.zipChange.bind(this);
  }

  nameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  addressChange(e) {
    this.setState({
      address: e.target.value
    })
  }

  cityChange(e) {
    this.setState({
      city: e.target.value
    })
  }

  stateChange(e) {
    this.setState({
      state: e.target.value
    })
  }

  zipChange(e) {
    this.setState({
      zip: e.target.value
    })
  }

  // componentDidUpdate() {
  //   this.setState({
  //     state: this.props.history
  //   })
  // }

  render() {
    console.log(this.props.history);
    return (
      <div>
        StepOne
        <Link to="/"><button>Cancel</button></Link>
        <form>
          <div>
            Property Name
        <input onChange={this.nameChange}></input>
          </div>
          <div>
            Address
        <input onChange={this.addressChange}></input>
          </div>
          <div>
            City
        <input onChange={this.cityChange}></input>
          </div>
          <div>
            State
        <input onChange={this.stateChange}></input>
          </div>
          <div>
            Zip
        <input onChange={this.zipChange}></input>
          </div>
        </form>
        <Link to="/wizard/step2"><button onClick={() => stepOne(this.state)}>Next Step</button></Link>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
  }
}

export default connect(mapStateToProps, {stepOne})(StepOne);