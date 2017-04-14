import React from 'react'
import moment from 'moment'
import '../css/ListPeriod.css'

export default ({ onSelectPeriod, period }) =>
  <div
    className="ListPeriod"
    onClick={() => onSelectPeriod(period)}
  >
    {moment.unix(period.dt).format('HH:mm')}
  </div>
