import {cn} from '@bem-react/classname'

import type {PropsWithChildren} from 'react'

import './JournalList.scss'

const cnJournalList = cn('JournalList')

const JournalList = ({children}: PropsWithChildren) => {
  return <div className={cnJournalList()}>{children}</div>
}

export default JournalList
