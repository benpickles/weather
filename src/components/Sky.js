import React from 'react'
import '../css/Sky.css'

const MINS_IN_DAY = 60 * 24
const MORNING = 60 * 6
const NIGHT = 60 * 18

export default ({ initialDate, time }) => {
  const mins = (time.hours() * 60) + time.minutes()

  let opacity

  if (mins < MORNING) {
    opacity = 1 - (mins / MORNING)
  } else if (mins > NIGHT) {
    opacity = mins / MINS_IN_DAY
  } else {
    opacity = 0
  }

  const percentThroughDay = mins / MINS_IN_DAY
  const diffDays = Math.floor(time.diff(initialDate, 'hours') / 24)
  const degreesThroughDay = Math.round(percentThroughDay * 360) + (diffDays * 360)
  const transform = `rotate(-${degreesThroughDay}deg)`

  return (
    <div className="Sky">
      <div
        className="Sky-dark"
        style={{ opacity }}
      />

      <div
        className="Sky-rotating"
        style={{ transform }}
      >
        <div className="Sky-sun" />
        <div className="Sky-moon" />
      </div>
    </div>
  )
}
