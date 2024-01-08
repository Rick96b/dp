import React from 'react'

import styles from './UsersReview.module.scss'
import { Button } from 'shared/components';

interface UsersTableProps {

}

const UsersReview: React.FC<UsersTableProps> = props => {
  return (
    <table className={styles.table}>
      <thead>
        <th>
          №
        </th>
        <th>
          Роль
        </th>
        <th>
          Логин
        </th>
        <th>
          Фио
        </th>
        <th>
          Действия
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            1
          </td>
          <td>
            Пользователь
          </td>
          <td>
            mironik
          </td>
          <td>
            Миронов Николай Сергеевич
          </td>
          <td>
            <Button onClick={() => {}} className={styles.tableButton} isFilled>Редактирование</Button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default UsersReview;