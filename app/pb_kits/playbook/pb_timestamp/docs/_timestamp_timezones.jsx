import React from 'react'
import Timestamp from '../_timestamp.jsx'

const TimestampTimezones = () => {
  return (
    <div>
      <Timestamp
          align="left"
          showDate="false"
          showTimezone="true"
          timestamp={new Date().getTime()}
          timezone="America/New_York"
      />

      <br />

      <Timestamp
          align="left"
          showDate="true"
          showTimezone="true"
          timestamp={new Date().getTime()}
          timezone="America/New_York"
      />

      <br />

      <Timestamp
          align="left"
          showDate="true"
          showTimezone="true"
          timestamp={new Date((new Date()).getFullYear() + 4, (new Date().getMonth()), (new Date().getDate() + 1)).getTime()}
          timezone="America/New_York"
      />

      <br />

      <Timestamp
          align="left"
          showDate="false"
          showTimezone="true"
          timestamp={new Date().getTime()}
          timezone="Asia/Hong_Kong"
      />

      <br />

      <Timestamp
          align="left"
          showDate="true"
          showTimezone="true"
          timestamp={new Date().getTime()}
          timezone="Asia/Hong_Kong"
      />

      <br />

      <Timestamp
          align="left"
          showDate="true"
          showTimezone="true"
          timestamp={new Date((new Date()).getFullYear() + 4, (new Date().getMonth()), (new Date().getDate() + 1)).getTime()}
          timezone="Asia/Hong_Kong"
      />
    </div>
  )
}

export default TimestampTimezones