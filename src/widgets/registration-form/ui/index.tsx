import React from 'react'
import { Button, Input } from 'shared/components';

import styles from './RegistrationForm.module.scss'

const RegistrationForm = () => {
  return (
    <form>
        <Input type='text' label='Логин'/>
        <Input type='password' label='Пароль'/>
        <Input type='password' label='Повторите пароль'/>
        <Input type='text' label='ФИО пользователя'/>
        <Input type='text' label='Название организации'/>
        <Input type='text' label='Отделение организации'/>
        <Input type='text' label='Деятельность организации'/>
        <div className={styles.buttonsContainer}>
            <Button isFilled>Зарегистрироваться</Button>
            <Button>Авторизироваться</Button>
        </div>
    </form>
  )
}

export default RegistrationForm;