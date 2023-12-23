import React from 'react'
import { Button, Input } from 'shared/components';

import styles from './AuthorizationForm.module.scss'

interface AuthorizationFormProps {
  changeForm: Function,
}

const AuthorizationForm: React.FC<AuthorizationFormProps> = props => {
  const {changeForm} = props

  return (
    <form className={styles.form}>
    <Input type='text' label='Логин'/>
    <Input type='password' label='Пароль'/>
    <div className={styles.buttonsContainer}>
        <Button onClick={() => {}}isFilled className={styles.formButton}>Войти</Button>
        <Button className={styles.formButton} onClick={() => changeForm()}>Зарегистрироваться</Button>
    </div>
</form>
  )
}

export default AuthorizationForm;