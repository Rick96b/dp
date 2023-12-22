import React from 'react'
import { Button, Input } from 'shared/components';

import styles from './AuthorizationForm.module.scss'

const AuthorizationForm = () => {
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
        <Button isFilled className={styles.formButton}>Войти</Button>
        <Button className={styles.formButton}>Зарегистрироваться</Button>
    </div>
</form>
  )
}

export default AuthorizationForm;