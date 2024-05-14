import React from 'react'
import {cn} from '@bem-react/classname'

import './App.scss'

import LeftPanel from './layout/LeftPanel/LeftPanel.tsx'
import Body from './layout/Body/Body.tsx'
import Header from './components/Header/Header.tsx'
import JournalAddButton from './components/JournalAddButton/JournalAddButton.tsx'
import JournalList from './components/JournalList/JournalList.tsx'
import JournalItem from './components/JournalItem/JournalItem.tsx'
import CardButton from './components/CardButton/CardButton.tsx'

const cnApp = cn('App')

const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title="Подготовка к обновлению курсов"
              date={new Date()}
              text="Сегодня провёл весь день за..."
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title="Поход в горы"
              date={new Date()}
              text="Думал, что очень много време..."
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>Body</Body>
    </div>
  )
}

export default App
