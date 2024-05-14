import React from 'react'
import {cn} from '@bem-react/classname'

import './Button.scss'

const cnButton = cn('Button')

const Button: React.FC = () => {
  return <button className={cnButton({accent: true})}>Сохранить</button>
}

export default Button
