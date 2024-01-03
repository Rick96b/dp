import React from 'react'
import { UsersTable } from 'widgets/users-table';

import styles from './UsersPage.module.scss'
import { Filter } from 'widgets/filter';

const UsersPage = () => {
  return (
    <div>
        <section className={styles.filterSection}>
            <Filter />
        </section>
        <section className={styles.gostSection}>
          <UsersTable />
        </section>
    </div>
  )
}

export default UsersPage;