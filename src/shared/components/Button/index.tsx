import React from 'react'

import styles from './Button.module.scss'
import classNames from 'classnames';

interface ButtonProps {
  children?: React.ReactNode;
  isFilled?: boolean
}

const Button:React.FC<ButtonProps> = ({children, isFilled}) => {
  return (
    <button className={classNames(styles.baseButton, isFilled ? styles.filledButton : '')}>
        {children}
    </button>
  )
}

export default Button;