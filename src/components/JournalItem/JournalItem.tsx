import {cn} from '@bem-react/classname'

import './JournalItem.scss'

import type {JournalItem} from '../../types'

const cnJournalItem = cn('JournalItem')

const JournalItem = ({title, date, text}: JournalItem) => {
  const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date)

  return (
    <>
      <h2 className={cnJournalItem('Header')}>{title}</h2>
      <div className={cnJournalItem('Body')}>
        <div className={cnJournalItem('Date')}>{formatedDate}</div>
        <div className={cnJournalItem('Text')}>{text}</div>
      </div>
    </>
  )
}

export default JournalItem
