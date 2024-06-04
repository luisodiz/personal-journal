import {cn} from '@bem-react/classname'

import './CardButton.scss'

import type {Button} from '../../types'

const cnCardButton = cn('CardButton')

const CardButton = ({className, children}: Button) => {
  return (
    <button className={`${cnCardButton()} ${className}`}>{children}</button>
  )
}

export default CardButton
