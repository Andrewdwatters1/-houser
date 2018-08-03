import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

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
  postNewHouse = () => {
    let houseToAdd = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    axios.post('http://localhost:4007/api/realestate/', {houseToAdd}).then(() => {
      this.props.history.goBack()
    })
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
          <input onChange={this.zipChange}></input>
          </div>
          <button onClick={this.postNewHouse}>Complete</button>
        </form>
      </div>
    )
  }
}