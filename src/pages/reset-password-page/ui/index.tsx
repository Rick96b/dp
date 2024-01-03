import React from 'react'
import { ResetPasswordForm } from 'widgets/reset-password-form'

import styles from './ResetPasswordPage.module.scss'

const ResetPasswordPage = () => {
  return (
    <div>
        <section className={styles.gostSection}>
            <ResetPasswordForm />
        </section>
    </div>
  )
}

export default ResetPasswordPage;