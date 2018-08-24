import React, { Component } from 'react';
import moment from 'moment'
import Graphic from './components/Graphic'
import List from './components/List'
import './App.css';

const APP_ID = 'ca8a6690af1723589f013d38854a4863'
const CITY_ID = 2643743
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${APP_ID}&id=${CITY_ID}&units=metric`

export default class extends Component {
  state = {
    data: null,
    selected: null,
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const first = data.list[0]
        const initialDate = moment.unix(first.dt).startOf('day')

        this.setState({
          data,
          initialDate,
          selected: first,
        })
      })
  }

  onSelectPeriod = (selected) => {
    this.setState({ selected })
  }

  render() {
    if (this.state.data) {
      return this.renderStuff()
    } else {
      return this.renderLoading()
    }
  }

  renderLoading() {
    return (
      <div>loading</div>
    )
  }

  renderStuff() {
    const {
      data: {
        list,
      },
      initialDate,
      selected,
    } = this.state

    return (
      <div className="App">
        <Graphic
          initialDate={initialDate}
          period={selected}
        />

        <List
          onSelectPeriod={this.onSelectPeriod}
          periods={list}
        />
      </div>
    )
  }
}
