import React from 'react'
import moment from 'moment'
import '../css/ListPeriod.css'

export default ({ period }) =>
  <div className="ListPeriod">
    {moment.unix(period.dt).format('HH:mm')}
  </div>
