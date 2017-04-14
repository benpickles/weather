import React from 'react'
import moment from 'moment'
import ListPeriod from './ListPeriod'
import '../css/ListDay.css'

export default ({ date, periods }) =>
  <div className="ListDay">
    <div className="ListDay-day">
      {moment(date).format('D')}
      <br />
      {moment(date).format('MMM')}
    </div>

    <div className="ListDay-periods">
      {periods.map(period =>
        <ListPeriod
          key={period.dt}
          period={period}
        />
      )}
    </div>
  </div>
