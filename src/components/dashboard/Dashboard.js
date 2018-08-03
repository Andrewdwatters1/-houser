import React, { Component } from 'react';
import House from '../house/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      houses: [],
    }
  }
  getAllHouses() {
    axios.get('http://localhost:4007/api/realestate/').then((result) => {
    this.setState({
        houses: result.data
      })
    }).catch((error) => {
      console.log('caught error on frontend ', error)
    })
  }
  deleteHouse() {
    //does something
  }

  componentDidMount() {
    this.getAllHouses();
  }
  render() {
    console.log(this.state.houses);
    let allHouses = this.state.houses.map((e, i) => {
      return (
        <House key={i} name={e.name} address={e.address} city={e.city} state={e.state} zip={e.zip}>
          <div>
            <p>Property Name: {e.name}</p>
            <p>Address: {e.address}</p>
            <p>City: {e.city}</p>
            <p>State: {e.state}</p>
            <p>Zip: {e.zip}</p>
            {this.props.children}
          </div>
        </House>
      )
    })
    if(this.state.houses.length) {
      return (
        <div>
          Dashboard Component
          <Link to="/wizard"><button>Add New Property</button></Link>
          {allHouses}
        </div>
      )
    } else {
      return <p>Please wait... loading</p>
    }
      
  }
}