import React from 'react'
import groupBy from 'lodash.groupby'
import moment from 'moment'
import ListDay from './ListDay'
import '../css/List.css'

export default ({ onSelectPeriod, periods }) => {
  const days = groupBy(periods, period =>
    moment.unix(period.dt).format('YYYY-MM-DD')
  )

  return (
    <div className="List">
      {Object.keys(days).map(day =>
        <ListDay
          date={Date.parse(day)}
          key={day}
          onSelectPeriod={onSelectPeriod}
          periods={days[day]}
        />
      )}
    </div>
  )
}
