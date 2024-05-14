import React from 'react'
import {cn} from '@bem-react/classname'

import './JournalItem.scss'

const cnJournalItem = cn('JournalItem')

interface JournalItemProps {
  title: string
  text: string
  date: Date
}

const JournalItem: React.FC<JournalItemProps> = ({title, date, text}) => {
  const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date)

  return (
    <div className={cnJournalItem()}>
      <h2 className={cnJournalItem('Header')}>{title}</h2>
      <div className={cnJournalItem('Body')}>
        <div className={cnJournalItem('Date')}>{formatedDate}</div>
        <div className={cnJournalItem('Text')}>{text}</div>
      </div>
    </div>
  )
}

export default JournalItem
