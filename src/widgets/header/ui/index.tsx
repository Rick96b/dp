import React, { useContext, useState } from 'react'

import styles from './Header.module.scss'
import { Button } from 'shared/components';
import { Link } from 'react-router-dom';

import addIcon from '../assets/add-document.svg'
import arrowDown from '../assets/arrow-down.svg'
import profileIcon from '../assets/profile-icon.svg'
import classNames from 'classnames';
import { UserContext } from 'pages';

const ProfileDropdown = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <div className={styles.dropdown}>
            <Link to='/reset-password' style={{color: 'inherit'}}>Сменить пароль</Link>
            <Link to='/' style={{color: 'inherit'}}>Редактировать профиль</Link>
            <button onClick={() => setUser(null)}>Выйти</button>
        </div>
    )
}

const Header = () => {
    const [isDropdownVisible,setDropdownVisible] = useState(false)

    const dropdownCloseHandler = () => {
        setDropdownVisible(false)
        document.removeEventListener('click', dropdownCloseHandler)
    }

    return (
        <header className={classNames(styles.header, 'container')}>
            <div className={styles.buttonsContainer}>
                <Button onClick={() => {}} className={styles.headerButton}>
                    <Link to='/' style={{color: 'inherit'}}>ВСЕ ДОКУМЕНТЫ</Link>
                </Button>
                <Button 
                    onClick={() => {}} 
                    isColoredText 
                    className={styles.headerButton} 
                    prefix={<img src={addIcon} alt='add'/>} 
                >
                    <Link to='/gost-editor' style={{color: 'inherit'}}>СОЗДАТЬ ДОКУМЕНТ</Link>
                </Button>
            </div>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li className={styles.navItem}>
                        <Link to='/users-page' style={{color: 'inherit'}}>
                            Пользователи
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/' style={{color: 'inherit'}}>
                            Архив
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/' style={{color: 'inherit'}}>
                            Статистика
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.profileContainer}>
                <Button 
                    onClick={(event: React.MouseEvent) => {
                        event.stopPropagation()
                        setDropdownVisible(!isDropdownVisible)
                        document.addEventListener('click', dropdownCloseHandler)
                    } }
                    isColoredText 
                    className={styles.profileButton}
                    prefix={<img src={profileIcon} alt='profile' style={{display: 'block', width: '22px', height: '22px'}}/>}
                    suffix={<img src={arrowDown} alt='open profile' style={{display: 'block', marginTop: '3px'}}/>}
                >
                    Профиль
                </Button>
                {isDropdownVisible &&
                    <ProfileDropdown />
                }
            </div>
            
        </header>
    )
}

export default Header;