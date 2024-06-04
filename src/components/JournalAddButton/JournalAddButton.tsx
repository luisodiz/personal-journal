import {cn} from '@bem-react/classname'

import './JournalAddButton.scss'

import Plus from '../../assets/img/icons/plus.svg?react'
import CardButton from '../CardButton/CardButton.tsx'

const cnJournalAddButton = cn('JournalAddButton')

const JournalAddButton = () => {
  return (
    <CardButton className={cnJournalAddButton()}>
      <Plus className={cnJournalAddButton('Icon')} />
      Новое воспоминание
    </CardButton>
  )
}

export default JournalAddButton
