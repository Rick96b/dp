import React from 'react'
import { Button, Input } from 'shared/components';

import styles from './ResetPasswordForm.module.scss'

const ResetPasswordForm = () => {
  return (
    <form className={styles.form}>
        <Input label='Старый пароль' type='password'/>
        <Input label='Старый пароль' type='password'/>
        <Input label='Старый пароль' type='password'/>
        <Button onClick={() => {}} className={styles.formButton} isFilled>Сохранить</Button>
    </form>
  )
}

export default ResetPasswordForm;