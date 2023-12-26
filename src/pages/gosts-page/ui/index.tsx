import React from 'react'
import { Filter } from 'widgets/filter';
import { GostTable } from 'widgets/gosts-table';

import styles from './GostsPage.module.scss'

const GostsPage = () => {
  return (
    <div>
        <section className={styles.filterSection}>
            <Filter />
        </section>
        <section className={styles.gostSection}>
            <GostTable />
        </section>
    </div>
  )
}

export default GostsPage;