import React from 'react'

import styles from './Button.module.scss'
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode
  isFilled?: boolean
  className?: string
  onClick: Function
}

const Button:React.FC<ButtonProps> = props => {
  const {
    children,
    isFilled,
    className,
    onClick
  } = props

  return (
    <button className={classNames(styles.baseButton, isFilled ? styles.filledButton : '', className)} onClick={(event) => onClick(event)}>
      {children}
    </button>
  )
}

export default Button;