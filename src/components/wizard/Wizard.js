import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
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
    this.zipChange = this.nameChange.bind(this);
  }

  nameChange(e) {
    this.setState({
      name: e.target.value
    })
    console.log('this.state', this.state)
  }
  addressChange(e) {
    this.setState({
      address: e.target.value
    })
    console.log('this.state', this.state)
  }
  cityChange(e) {
    this.setState({
      city: e.target.value
    })
    console.log('this.state', this.state)
  }
  stateChange(e) {
    this.setState({
      state: e.target.value
    })
    console.log('this.state', this.state)
  }
  zipChange(e) {
    this.setState({
      zip: e.target.value
    })
    console.log('this.state', this.state)
  }
  postNewHouse() {
    //does something
  }
  render() {
    return (
      <div>
        Wizard Component
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
          <input onChange={this.zipChange} type="number"></input>
          </div>
        </form>
      </div>
    )
  }
}