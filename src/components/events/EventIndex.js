import React from 'react'
import axios from 'axios'
import EventCard from './EventCard'

import { Link } from 'react-router-dom'


export default class EventIndex extends React.Component {
  state = {
    pubs: null
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/pubs')
      console.log('res data', res.data)
      this.setState({ pubs: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log('pubs', this.state.pubs)
    if (!this.state.pubs) return null
    // const eventArr = this.state.events
    return (
      <section className="event-index-section">
        <h1>Find a pub quiz near you!</h1>
        <div className="container">
          {this.state.pubs.map(pub => (
            <EventCard key={pub._id} {...pub} />
          ))}
        </div>
        <Link to="/events/new">
          <button type="button">New Event</button>
        </Link>
      </section>
    )
  }

}