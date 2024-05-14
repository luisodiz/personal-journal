import React, {MouseEvent} from 'react'
import {cn} from '@bem-react/classname'

import './Button.scss'

const cnButton = cn('Button')

const Button: React.FC = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e)
    console.log('Тест')
  }

  return (
    <button onClick={handleClick} className={cnButton({accent: true})}>
      Сохранить
    </button>
  )
}

export default Button
