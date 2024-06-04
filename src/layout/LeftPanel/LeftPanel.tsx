import {cn} from '@bem-react/classname'

import type {PropsWithChildren} from 'react'

import './LeftPanel.scss'

const cnLeftPanel = cn('LeftPanel')

const LeftPanel = ({children}: PropsWithChildren) => {
  return <div className={cnLeftPanel()}>{children}</div>
}

export default LeftPanel
