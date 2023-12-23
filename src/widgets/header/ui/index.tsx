import React from 'react'

import styles from './Header.module.scss'
import { Button } from 'shared/components';
import { Link } from 'react-router-dom';

import addIcon from '../assets/add-document.svg'
import arrowDown from '../assets/arrow-down.svg'
import profileIcon from '../assets/profile-icon.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.buttonsContainer}>
            <Button onClick={() => {}} className={styles.headerButton}>ВСЕ ДОКУМЕНТЫ</Button>
            <Button 
                onClick={() => {}} 
                isColoredText 
                className={styles.headerButton} 
                prefix={<img src={addIcon} alt='add'/>} 
            >
                СОЗДАТЬ ДОКУМЕНТ
            </Button>
        </div>
        <nav className={styles.headerNav}>
            <ul className={styles.headerNavList}>
                <li className={styles.navItem}>
                    <Link to='/' style={{color: 'inherit'}}>
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
        <Button 
            onClick={() => {}} 
            isColoredText 
            className={styles.profileButton}
            prefix={<img src={profileIcon} alt='profile' style={{display: 'block'}}/>}
            suffix={<img src={arrowDown} alt='open profile' style={{display: 'block', marginTop: '3px'}}/>}
        >
            Профиль
        </Button>
    </header>
  )
}

export default Header;