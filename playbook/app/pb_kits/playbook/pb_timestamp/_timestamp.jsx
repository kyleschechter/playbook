/* @flow */

import React from 'react'
import classnames from 'classnames'

import { Caption } from '../'

import { buildCss, buildDataProps } from '../utilities/props'

import { globalProps } from '../utilities/globalProps.js'

type TimestampProps = {
  id?: string,
  data?: object,
  className?: string,
  text?: string,
}

const Timestamp = (props: TimestampProps) => {
  const { id, className, data = {}, text } = props
  const dataProps = buildDataProps(data)
  const pbCss = buildCss('pb_timestamp_kit')

  return (
    <div
        {...dataProps}
        className={classnames(pbCss, globalProps(props), className)}
        id={id}
    >
      <Caption
          size="xs"
          tag="span"
          text={text}
      />
    </div>
  )
}

export default Timestamp