import React, {type FormEvent} from 'react'
import {cn} from '@bem-react/classname'

import './JournalForm.scss'

import Button from '../Button/Button.tsx'

import type {SaveItem} from '../../App.tsx'
import type {JournalItem} from '../../types'

const cnJournalForm = cn('JournalForm')

interface JournalFormData extends JournalItem {}

interface JournalFormProps {
  saveItem: SaveItem<JournalFormData>
}

const JournalForm: React.FC<JournalFormProps> = ({saveItem}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const formProps = Object.fromEntries(formData)
    saveItem(formProps as unknown as JournalFormData)
  }

  return (
    <form className={cnJournalForm()} onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <textarea name="text"></textarea>
      <Button text="Сохранить" onClick={() => console.log('Нажата кнопка')} />
    </form>
  )
}

export default JournalForm
