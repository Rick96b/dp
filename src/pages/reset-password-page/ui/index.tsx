import React, { useContext } from 'react'
import { ResetPasswordForm } from 'widgets/reset-password-form'

import styles from './ResetPasswordPage.module.scss'
import axios from 'axios'
import { UserContext } from 'entities/user'

const ResetPasswordPage = () => {
  const {user} = useContext(UserContext)
  const handleSubmit = (newPassword: string) => {
    axios.post('https://backend-seaz96.kexogg.ru/api/accounts/change-password', {
      'login': user?.login,
      'new_password': newPassword
    }).then(responce => console.log(responce))
  }

  return (
    <div>
        <section className={styles.gostSection}>
            <ResetPasswordForm handleSubmit={handleSubmit}/>
        </section>
    </div>
  )
}

export default ResetPasswordPage;