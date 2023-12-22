import React from 'react'

import styles from './Button.module.scss'
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode
  isFilled?: boolean
  className?: string
}

const Button:React.FC<ButtonProps> = props => {
  const {
    children,
    isFilled,
    className
  } = props

  return (
    <button className={classNames(styles.baseButton, isFilled ? styles.filledButton : '', className)}>
        {children}
    </button>
  )
}

export default Button;