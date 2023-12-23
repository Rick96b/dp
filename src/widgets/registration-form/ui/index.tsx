import React from 'react'
import { Button, Input } from 'shared/components';

import styles from './RegistrationForm.module.scss'

interface RegistrationFormProps {
  changeForm: Function,
}


const RegistrationForm:React.FC<RegistrationFormProps> = props => {
  const {changeForm} = props

  return (
    <form className={styles.form}>
        <Input type='text' label='Логин'/>
        <Input type='password' label='Пароль'/>
        <Input type='password' label='Повторите пароль'/>
        <Input type='text' label='ФИО пользователя'/>
        <Input type='text' label='Название организации'/>
        <Input type='text' label='Отделение организации'/>
        <Input type='text' label='Деятельность организации'/>
        <div className={styles.buttonsContainer}>
            <Button onClick={() => {}} isFilled className={styles.formButton}>Зарегистрироваться</Button>
            <Button className={styles.formButton} onClick={() => changeForm()} isColoredText>Авторизироваться</Button>
        </div>
    </form>
  )
}

export default RegistrationForm;