import React, {MouseEvent} from 'react'
import {cn} from '@bem-react/classname'

import './Button.scss'

const cnButton = cn('Button')

interface ButtonProps {
  text: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({text, onClick}) => {
  return (
    <button className={cnButton({accent: true})} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
