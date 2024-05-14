import React, {PropsWithChildren} from 'react'
import {cn} from '@bem-react/classname'
import {classnames} from '@bem-react/classnames'

import './CardButton.scss'

const cnCardButton = cn('CardButton')

interface CardButtonProps extends PropsWithChildren {
  className?: string
}

const CardButton: React.FC<CardButtonProps> = ({className, children}) => {
  return (
    <button
      className={
        className ? classnames(cnCardButton(), className) : cnCardButton()
      }>
      {children}
    </button>
  )
}

export default CardButton
