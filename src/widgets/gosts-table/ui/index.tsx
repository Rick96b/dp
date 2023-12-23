import React from 'react'

import styles from './GostTable.module.scss'
import { Button } from 'shared/components';

const GostTable = () => {
  return (
    <table className={styles.table}>
        <thead>
          <tr className={styles.tableRow}>
            <th>№</th>
            <th>Обозначение</th>
            <th>Код ОКС</th>
            <th>Наименование</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ГОСТ 8.009-84</td>
            <td>17.020</td>
            <td className={styles.gostDescription}>Трубы медные прямоугольного и квадратного сечений технические условия</td>
            <td>
              <div className={styles.buttons}>
                <Button onClick={() => {}} className={styles.tableButton}>Просмотр</Button>
                <Button onClick={() => {}} className={styles.tableButton}>Редактирование</Button>
              </div>
            </td>
          </tr>
        </tbody>
    </table>
  )
}

export default GostTable;