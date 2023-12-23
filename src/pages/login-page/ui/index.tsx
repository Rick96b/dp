import React, {useState} from 'react'
import { AuthorizationForm } from 'widgets/authorization-form';
import { RegistrationForm } from 'widgets/registration-form';

import styles from './LoginPage.module.scss';
import urfuLogo from 'shared/assets/urfu.png';

enum states {
    authorization,
    registration
}

const LoginPage = () => {
    const [state, setState] = useState<states>(states.registration)
    return (
    <div className={styles.loginPageContainer}>
        <img className={styles.logo} src={urfuLogo} alt='logo'/>
        {
            state === states.authorization 
            ? 
            <section className={styles.authorizationForm}>
                <AuthorizationForm changeForm={() => setState(states.registration)}/>
            </section>
            :
            <section className={styles.registrationForm}>
                <RegistrationForm changeForm={() => setState(states.authorization)}/>
            </section>
        }
    </div>
    )
}

export default LoginPage;