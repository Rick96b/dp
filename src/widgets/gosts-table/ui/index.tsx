import React from 'react'

import styles from './GostTable.module.scss'
import { Button } from 'shared/components';
import { gostModel } from 'entities/gost';
import eye from 'shared/assets/eye.svg';
import pen from 'shared/assets/pen.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface GostsTableProps {
  gosts: gostModel.Gost[],
  filterValue?: string
}

const GostsTable: React.FC<GostsTableProps> = props => {
  const {gosts, filterValue} = props

  return (
    <table className={styles.table}>
        <thead>
          <tr className={styles.tableRow}>
            <th>№</th>
            <th>Код ОКС</th>
            <th>Обозначение</th>
            <th>Наименование</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {filterValue 
            ? 
            gosts.map(gost => 
              (gost.primary.designation.includes(filterValue) || gost.primary.fullName.includes(filterValue)) && 
              gostRow(gost)
            ) 
            : 
            gosts.map(gost => gostRow(gost))
          }   
        </tbody>
    </table>
  )
}


const gostRow = (gost: gostModel.Gost) => {
  return (
    <tr>
      <td>{gost.docId}</td>
      <td>{gost.primary.codeOKS}</td>
      <td>{gost.primary.designation}</td>
      <td className={styles.gostDescription}>{gost.primary.fullName}</td>
      <td>
        <div className={styles.buttons}>
          <Link to={`/gost-review/${gost.docId}`} className={classNames(styles.tableButton, 'baseButton', 'coloredText')}>
            <img src={eye} alt='eye' className={styles.buttonIcon}/>
            Просмотр
          </Link>
          <Link to={`/gost-edit/${gost.docId}`} className={classNames(styles.tableButton, 'baseButton', 'filledButton')}>
            <img src={pen} alt='pen' className={styles.buttonIcon}/>
            Редактирование
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default GostsTable; 