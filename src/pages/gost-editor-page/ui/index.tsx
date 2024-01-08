import React from 'react'
import { Filter } from 'widgets/filter';
import GostForm from 'widgets/gost-form/ui';

import styles from './GostEditorPage.module.scss'
import axios from 'axios';
import { newGostModel } from 'widgets/gost-form';

const GostEditorPage = () => {

  const handleSubmit = (gost: newGostModel.GostToSave) => {
    axios.post('https://backend-seaz96.kexogg.ru/api/docs/add', gost)
    .then(responce => console.log(responce))
  }

  return (
    <div className='container'>
      <section className={styles.filterSection}>
        <Filter />
      </section>
      <section className={styles.reviewSection}>
        <GostForm handleSubmit={handleSubmit}/>
      </section>
    </div>
  )
}

export default GostEditorPage;