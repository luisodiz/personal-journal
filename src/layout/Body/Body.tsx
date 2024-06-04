import {cn} from '@bem-react/classname'

import type {PropsWithChildren} from 'react'

import './Body.scss'

const cnBody = cn('Body')

const Body = ({children}: PropsWithChildren) => {
  return <div className={cnBody()}>{children}</div>
}

export default Body
