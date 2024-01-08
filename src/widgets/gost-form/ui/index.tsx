import React, { useState } from 'react'

import styles from './GostForm.module.scss'
import { Button, Input } from 'shared/components'
import { newGostModel } from '..'

interface GostFormProps {
  handleSubmit: Function
}

const GostForm: React.FC<GostFormProps> = props => {
  const [newGost, setNewGost] = useState<newGostModel.GostToSave>({
    "designation": '',
    "fullName": '',
    "codeOKS": '',
    "activityField": '',
    "acceptanceDate": '',
    "commissionDate":  '',
    "author": '',
    "acceptedFirstTimeOrReplaced": '',
    "content": '',
    "keyWords": '',
    "keyPhrases": '',
    "applicationArea": '',
    "adoptionLevel": 0,
    "documentText": '',
    "changes": '',
    "amendments": '',
    "status": 0,
    "harmonization": 0,
    "isPrimary": true,
    "referencesId": []
  })
  const {handleSubmit} = props

  return (
    <form onSubmit={() => handleSubmit()}>
      <table className={styles.gostTable}>
        <thead>
          <tr>
            <td>Поле</td>
            <td>Значение</td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>Наименование стандарта</td>
              <td>
                <Input type='text' 
                  value={newGost.designation} 
                  onChange={(value: string) => setNewGost({...newGost, designation:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Код ОКС</td>
              <td>
              <Input type='text' 
                  value={newGost.codeOKS} 
                  onChange={(value: string) => setNewGost({...newGost, codeOKS:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Сфера деятельности</td>
              <td>
                <Input type='text' 
                  value={newGost.activityField} 
                  onChange={(value: string) => setNewGost({...newGost, activityField:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Год принятия</td>
              <td>
                <Input type='date' 
                  value={newGost.acceptanceDate} 
                  onChange={(value: string) => setNewGost({...newGost, acceptanceDate:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Год введения</td>
              <td>
              <Input type='date' 
                  value={newGost.commissionDate} 
                  onChange={(value: string) => setNewGost({...newGost, commissionDate:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Разработчик</td>
              <td>
                <Input type='text' 
                  value={newGost.author} 
                  onChange={(value: string) => setNewGost({...newGost, author:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Принят впервые/взамен</td>
              <td>
              <Input type='text' 
                  value={newGost.acceptedFirstTimeOrReplaced} 
                  onChange={(value: string) => setNewGost({...newGost, acceptedFirstTimeOrReplaced:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Содержание</td>
              <td>
              <Input type='text' 
                  value={newGost.content} 
                  onChange={(value: string) => setNewGost({...newGost, content:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Область применения</td>
              <td>
              <Input type='text' 
                  value={newGost.applicationArea} 
                  onChange={(value: string) => setNewGost({...newGost, applicationArea:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Ключевые слова</td>
              <td>
              <Input type='text' 
                  value={newGost.keyWords} 
                  onChange={(value: string) => setNewGost({...newGost, keyWords:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Ключевые фразы</td>
              <td>
              <Input type='text' 
                  value={newGost.keyPhrases} 
                  onChange={(value: string) => setNewGost({...newGost, keyPhrases:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Уровень принятия</td>
              <td>
              <Input type='text' 
                  value={newGost.adoptionLevel} 
                  onChange={(value: string) => setNewGost({...newGost, adoptionLevel:parseInt(value)})}
                />
              </td>
          </tr>
          <tr>
              <td>Текст стандарта</td>
              <td>
              <Input type='text' 
                  value={newGost.documentText} 
                  onChange={(value: string) => setNewGost({...newGost, documentText:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Нормативные ссылки</td>
              <td>
              <Input type='text' 
                  value={''} 
                  onChange={(value: string) => setNewGost({...newGost, author:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Изменения</td>
              <td>
              <Input type='text' 
                  value={newGost.author} 
                  onChange={(value: string) => setNewGost({...newGost, author:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Поправки</td>
              <td>
              <Input type='text' 
                  value={newGost.author} 
                  onChange={(value: string) => setNewGost({...newGost, author:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Отменен/Заменен/Действующийи</td>
              <td>
              <Input type='text' 
                  value={newGost.author} 
                  onChange={(value: string) => setNewGost({...newGost, author:value})}
                />
              </td>
          </tr>
          <tr>
              <td>Уровень гармонизации</td>
              <td className={styles.radioButtons}>
                <div className={styles.radioButton}>
                  <input type="radio" id="unharmonized" name="harmonized" value="Негармонизированный" checked />
                  <label htmlFor='unharmonized'>Негармонизированный</label>
                </div>
                <div className={styles.radioButton}>
                  <input type="radio" id="harmonized" name="harmonized" value="Гармонизорованный" />
                  <label htmlFor="harmonized">Гармонизорованный</label>
                </div>
                <div className={styles.radioButton}>
                  <input type="radio" id="modified" name="harmonized" value="Модифицированный" />
                  <label htmlFor="modified">Модифицированный</label>
                </div>
              </td>
          </tr>
        </tbody>
      </table>
      <Button type='submit' onClick={() => {}} isFilled className={styles.saveButton}>Сохранить</Button>
    </form>
  )
}

export default GostForm