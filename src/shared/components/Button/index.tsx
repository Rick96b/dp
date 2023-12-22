import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
    children?: React.ReactNode
}

const Button:React.FC<ButtonProps> = ({children}) => {
  return (
    <button className={styles.baseButton}>
        {children}
    </button>
  )
}

export default Button;