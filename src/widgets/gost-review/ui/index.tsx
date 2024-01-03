import React from 'react'

import styles from './GostReview.module.scss';
import { Button } from 'shared/components';

const GostReview = () => {
  return (
    <div className={styles.reviewContainer}>
        <h2 className={styles.title}>Просмотр документа</h2>
        <div className={styles.buttonsContainer}>
            <Button onClick={() => {}} isColoredText>Редактироваться</Button>
            <Button onClick={() => {}} isColoredText>Архивировать</Button>
            <Button onClick={() => {}} isColoredText>Удалить</Button>
            <Button onClick={() => {}} isColoredText>Заменить</Button>
            <Button onClick={() => {}} isColoredText>Актуализировать данные</Button>
        </div>
        <table className={styles.gostTable}>
            <thead>
                <tr>
                    <td>Поле</td>
                    <td>Первоначальное значение</td>
                    <td>Последняя актуализация</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Наименование стандарта</td>
                    <td>ГОСТ 8.009-84</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Код ОКС</td>
                    <td>ГСИ, нормируемые метрологические характеристики средств измерений</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Сфера деятельности</td>
                    <td>17.020</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Год принятия</td>
                    <td>71.12.62</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Год введения</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Разработчик</td>
                    <td>71.12.62</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Принят впервые/взамен</td>
                    <td>ссылка на текст документа</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Содержание</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Область применения</td>
                    <td>ГОСТ 8.009-84</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Ключевые слова</td>
                    <td>1986-01-01</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Ключевые фразы</td>
                    <td>1986-01-01</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Уровень принятия</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Текст стандарта</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Нормативные ссылки</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Изменения</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Поправки</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Отменен/Заменен/Действующийи</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Уровень гармонизации</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default GostReview;