import React, {PropsWithChildren} from 'react'
import {cn} from '@bem-react/classname'

import './LeftPanel.scss'

const cnLeftPanel = cn('LeftPanel')

interface LeftPanelProps extends PropsWithChildren {}

const LeftPanel: React.FC<LeftPanelProps> = ({children}) => {
  return <div className={cnLeftPanel()}>{children}</div>
}

export default LeftPanel
