import React, {useState} from 'react'
import {cn} from '@bem-react/classname'

import './App.scss'

import LeftPanel from './layout/LeftPanel/LeftPanel.tsx'
import Body from './layout/Body/Body.tsx'
import Header from './components/Header/Header.tsx'
import JournalAddButton from './components/JournalAddButton/JournalAddButton.tsx'
import JournalList from './components/JournalList/JournalList.tsx'
import JournalItem from './components/JournalItem/JournalItem.tsx'
import CardButton from './components/CardButton/CardButton.tsx'
import JournalForm from './components/JournalForm/JournalForm.tsx'

import type {JournalItem as IJournalItem} from './types'

export type SaveItem<T> = {
  (item: {[Property in keyof T]: any}): void
}

const cnApp = cn('App')

const App: React.FC = () => {
  const [journalItems, setJournalItems] = useState<IJournalItem[]>([
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Сегодня провёл весь день за...',
    },
    {
      title: 'Поход в горы',
      date: new Date(),
      text: 'Думал, что очень много време...',
    },
    {
      title: 'Первая заметка',
      date: new Date(),
      text: 'Создал первую заметку, чтобы ...',
    },
  ])

  const saveItem: SaveItem<IJournalItem> = item => {
    setJournalItems(oldItems => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
      },
    ])
  }

  const sortItems: (a: IJournalItem, b: IJournalItem) => number = (a, b) => {
    if (a.date > b.date) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className={cnApp()}>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {journalItems.sort(sortItems).map(item => (
            <CardButton>
              <JournalItem
                title={item.title}
                date={item.date}
                text={item.text}
              />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm saveItem={saveItem} />
      </Body>
    </div>
  )
}

export default App
