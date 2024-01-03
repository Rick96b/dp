import React from 'react'
import { Filter } from 'widgets/filter';
import GostForm from 'widgets/gost-form/ui/GostForm';

import styles from './GostEditorPage.module.scss'

const GostEditorPage = () => {
  return (
    <div>
      <section className={styles.filterSection}>
        <Filter />
      </section>
      <section className={styles.reviewSection}>
        <GostForm />
      </section>
    </div>
  )
}

export default GostEditorPage;