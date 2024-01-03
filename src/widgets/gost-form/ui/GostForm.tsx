import React from 'react'

import styles from './GostForm.module.scss'
import { Input } from 'shared/components'

const GostForm = () => {
  return (
    <form>
      <table className={styles.gostTable}>
        <thead>
          <tr>
            <td>Поле</td>
            <td>Значение</td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>Наименование стандарта</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Код ОКС</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Сфера деятельности</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Год принятия</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Год введения</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Разработчик</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Принят впервые/взамен</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Содержание</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Область применения</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Ключевые слова</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Ключевые фразы</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Уровень принятия</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Текст стандарта</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Нормативные ссылки</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Изменения</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Поправки</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Отменен/Заменен/Действующийи</td>
              <td>
                <Input type='text' />
              </td>
          </tr>
          <tr>
              <td>Уровень гармонизации</td>
              <td className={styles.radioButtons}>
                <div className={styles.radioButton}>
                  <input type="radio" id="unharmonized" name="harmonized" value="Негармонизированный" checked />
                  <label htmlFor='unharmonized'>Негармонизированный</label>
                </div>
                <div className={styles.radioButton}>
                  <input type="radio" id="harmonized" name="harmonized" value="Гармонизорованный" />
                  <label htmlFor="harmonized">Гармонизорованный</label>
                </div>
                <div className={styles.radioButton}>
                  <input type="radio" id="modified" name="harmonized" value="Модифицированный" />
                  <label htmlFor="modified">Модифицированный</label>
                </div>
              </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default GostForm