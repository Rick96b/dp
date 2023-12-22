import React, { useState } from 'react'
import styles from './Input.module.scss'

export type CustomInputType =
 | 'email'
 | 'money'
 | 'number'
 | 'password'
 | 'phone'
 | 'text'
 | 'zip'
 
interface InputProps {
 label?: string
 placeholder?: string
 required?: boolean
 type: CustomInputType
}
 
const Input: React.FC<InputProps> = props => {
  const [inputValue, setInputValue] = useState<string | number | undefined>()
  const {
    label,
    placeholder = label,
    required,
    type,
  } = props

  const renderRequiredLabel = (): JSX.Element => (
    <span className='input-required'>*</span>
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  const renderInputNode = (): JSX.Element => {
    const inputID: string = label?.toLowerCase() || ''
    return (
      <div className={styles.inputContainer}>
        {label 
        ?
          <label htmlFor={inputID} className={styles.baseLabel}>
            {label} {required ? renderRequiredLabel() : null}
          </label>
        : 
          '' 
        }
        <input
          id={inputID}
          type={type}
          name={inputID}
          placeholder={placeholder}
          onChange={handleInputChange}
          required={required ?? false}
          value={inputValue}
          className={styles.baseInput}
        />
      </div>
    )
  }
  return <>{label ? renderInputNode() : null}</>
}
 
export default Input