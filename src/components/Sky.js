import React from 'react'
import '../css/Sky.css'

const MINS_IN_DAY = 60 * 24

export default ({ time }) => {
  const mins = (time.hours() * 60) + time.minutes()
  const percentThroughDay = mins / MINS_IN_DAY
  const degreesThroughDay = Math.round(percentThroughDay * 360)
  const transform = `rotate(-${degreesThroughDay}deg)`

  return (
    <div className="Sky">
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
