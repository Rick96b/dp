import React from 'react'

import styles from './GostTable.module.scss'
import { Button } from 'shared/components';
import { gostModel } from 'entities/gost';
import eye from 'shared/assets/eye.svg';
import pen from 'shared/assets/pen.svg';

interface GostsTableProps {
  gosts: gostModel.Gost[]
}

const GostsTable: React.FC<GostsTableProps> = props => {
  const {gosts} = props

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
          {gosts.map(gost => 
            <tr>
              <td>{gost.docId}</td>
              <td>{gost.actual.designation}</td>
              <td>{gost.actual.codeOKS}</td>
              <td className={styles.gostDescription}>{gost.actual.fullName}</td>
              <td>
                <div className={styles.buttons}>
                  <Button onClick={() => {}} className={styles.tableButton} isColoredText prefix={<img src={eye}></img>}>Просмотр</Button>
                  <Button onClick={() => {}} className={styles.tableButton} isFilled prefix={<img src={pen}></img>}>Редактирование</Button>
                </div>
              </td>
            </tr>
          )}
          
        </tbody>
    </table>
  )
}

export default GostsTable; 