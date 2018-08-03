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
  getAllHouses = () => {
    axios.get('http://localhost:4007/api/realestate/').then((result) => {
      this.setState({
        houses: result.data
      })
    }).catch((error) => {
      console.log('caught error on frontend ', error)
    })
  }
  deleteHouse = (id) => {
    axios.delete(`http://localhost:4007/api/realestate/${id}`).then((result) => {
      this.setState({
        houses: result.data
      })
    })
  }

  componentDidMount() {
    this.getAllHouses();
  }
  render() {
    let allHouses = this.state.houses.map((e, i) => {
      return (
        <div>
          <House
            key={i}
            name={e.name}
            address={e.address}
            city={e.city}
            state={e.state}
            zip={e.zip}>
          </House>
          <button onClick={() => this.deleteHouse(e.id)}>Delete Property</button>
        </div>

            )
          })
    if (this.state.houses.length) {
      return (
        <div>
              Dashboard Component
          <Link to="/wizard/step1"><button>Add New Property</button></Link>
              {allHouses}
            </div>
            )
    } else {
      return <p>Please wait... loading</p>
            }
        
          }
}