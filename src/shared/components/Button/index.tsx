import React from 'react'

import styles from './Button.module.scss'
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode
  isFilled?: boolean
  isColoredText?: boolean
  className?: string
  onClick: Function
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const Button:React.FC<ButtonProps> = props => {
  const {
    children,
    isFilled,
    isColoredText,
    className,
    onClick,
    prefix,
    suffix
  } = props

  return (
    <button 
      className={classNames(className, styles.baseButton, 
        isFilled ? styles.filledButton : '', 
        isColoredText ? styles.coloredText : '', 
      )} 
      onClick={(event) => onClick(event)}
    >
      <div className={styles.prefix}>
        {prefix}
      </div>
      <span>{children}</span>
      <div className={styles.suffix}>
        {suffix}
      </div>
    </button>
  )
}

export default Button;