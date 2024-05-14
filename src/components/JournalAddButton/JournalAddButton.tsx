import React from 'react'
import {cn} from '@bem-react/classname'
import {classnames} from '@bem-react/classnames'

import styles from './JournalAddButton.module.scss'

import CardButton from '../CardButton/CardButton.tsx'

const cnJournalAddButton = cn('JournalAddButton')

const JournalAddButton: React.FC = () => {
  return (
    <CardButton
      className={classnames(
        styles[cnJournalAddButton()],
        styles[cnJournalAddButton('Head')],
      )}>
      Новое воспоминание
      {/*<div className={styles[cn('JournalAddButton')('Head')]}></div>*/}
    </CardButton>
  )
}

export default JournalAddButton
