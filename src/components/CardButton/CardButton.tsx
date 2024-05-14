import React, {PropsWithChildren} from 'react'
import {cn} from '@bem-react/classname'

import './CardButton.scss'

const cnCardButton = cn('CardButton')

interface CardButtonProps extends PropsWithChildren {}

const CardButton: React.FC<CardButtonProps> = ({children}) => {
  return <button className={cnCardButton()}>{children}</button>
}

export default CardButton
