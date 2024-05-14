import React from 'react'
import {cn} from '@bem-react/classname'

import './JournalAddButton.scss'

import CardButton from '../CardButton/CardButton.tsx'

const cnJournalAddButton = cn('JournalAddButton')

const JournalAddButton: React.FC = () => {
  return (
    <CardButton className={cnJournalAddButton()}>Новое воспоминание</CardButton>
  )
}

export default JournalAddButton
