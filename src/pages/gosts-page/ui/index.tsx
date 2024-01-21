import { Filter } from 'widgets/filter';
import { GostsTable } from 'widgets/gosts-table';

import styles from './GostsPage.module.scss'
import { useAxios } from 'shared/hooks';
import { gostModel } from 'entities/gost';
import classNames from 'classnames';
import { useState } from 'react';

const GostsPage = () => {
  const [inputValue, setInputValue] = useState('')
  const {response, error, loading, setParams} = useAxios<gostModel.Gost[]>(
    'https://backend-seaz96.kexogg.ru/api/docs/all?',
  )


  return (
    <div className='container'>
        <section className={styles.filterSection}>
            <Filter 
              filterSubmit={(filterData: gostModel.GostFields) => setParams(filterData)}
              inputSubmit={(inputData: string) => setInputValue(inputData)}
            />
        </section>
        <section className={classNames(styles.gostSection, 'contentContainer')}>
            <GostsTable gosts={response || []} filterValue={inputValue}/>
        </section>
    </div>
  )
}

export default GostsPage;