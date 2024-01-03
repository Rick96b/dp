import React from 'react'
import { Filter } from 'widgets/filter';
import { GostReview } from 'widgets/gost-review';

import styles from './GostReviewsPage.module.scss'


const GostReviewPage = () => {
  return (
    <div>
      <section className={styles.filterSection}>
        <Filter />
      </section>
      <section className={styles.reviewSection}>
        <GostReview />
      </section>
    </div>
  )
}

export default GostReviewPage;