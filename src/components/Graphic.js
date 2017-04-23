import React from 'react'
import moment from 'moment'
import Sky from './Sky'
import '../css/Graphic.css'

export default ({ initialDate, period }) => {
  const time = moment.unix(period.dt)

  return (
    <div className="Graphic">
      <div className="Graphic-layer">
        <Sky
          initialDate={initialDate}
          time={time}
        />
      </div>

      <div className="Graphic-layer">
        <div className="Graphic-ground" />

        <div className="Graphic-time">
          {time.format('HH:mm')}
        </div>

        <div className="Graphic-temp">
          {Math.floor(period.main.temp)}º
        </div>
      </div>
    </div>
  )
}
