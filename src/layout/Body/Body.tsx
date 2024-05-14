import React, {PropsWithChildren} from 'react'
import {cn} from '@bem-react/classname'

import './Body.scss'

const cnBody = cn('Body')

interface BodyProps extends PropsWithChildren {}

const Body: React.FC<BodyProps> = ({children}) => {
  return <div className={cnBody()}>{children}</div>
}

export default Body
