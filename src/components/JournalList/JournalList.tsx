import React, {PropsWithChildren} from 'react'
import {cn} from '@bem-react/classname'

import './JournalList.scss'

const cnJournalList = cn('JournalList')

interface JournalListProps extends PropsWithChildren {}

const JournalList: React.FC<JournalListProps> = ({children}) => {
  return <div className={cnJournalList()}>{children}</div>
}

export default JournalList
