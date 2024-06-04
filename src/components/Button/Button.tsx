import {cn} from '@bem-react/classname'

import './Button.scss'

import type {Button} from '../../types/Button.ts'

const cnButton = cn('Button')

interface ButtonProps extends Button {
  text: string
}

const Button = ({text, ...props}: ButtonProps) => {
  return (
    <button className={cnButton({accent: true})} {...props}>
      {text}
    </button>
  )
}

export default Button
