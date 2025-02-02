/* @flow */

import React from 'react'
import classnames from 'classnames'
import { buildAriaProps, buildCss, buildDataProps } from '../utilities/props'
import { globalProps } from '../utilities/globalProps.js'

type TitleProps = {
  aria?: object,
  children?: array<React.ReactNode> | React.ReactNode,
  className?: string,
  data?: object,
  id?: string,
  size?: 1 | 2 | 3 | 4,
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span",
  text?: string,
  variant?: null | "link",
}

const Title = (props: TitleProps) => {
  const {
    aria = {},
    children,
    className,
    data = {},
    id,
    size = 3,
    tag = 'h3',
    text,
    variant = null,
  } = props

  const ariaProps = buildAriaProps(aria)
  const dataProps = buildDataProps(data)
  const classes = classnames(
    buildCss('pb_title_kit', size, variant),
    globalProps(props),
    className
  )
  const Tag = `${tag}`

  return (
    <Tag
        {...ariaProps}
        {...dataProps}
        className={classes}
        id={id}
    >
      {text || children}
    </Tag>
  )
}

export default Title
