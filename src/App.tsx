import React from 'react'

import Button from './components/Button/Button.tsx'
import CardButton from './components/CardButton/CardButton.tsx'
import JournalItem from './components/JournalItem/JournalItem.tsx'

const App: React.FC = () => {
  return (
    <>
      Проект
      <br />
      <Button />
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
    </>
  )
}

export default App
