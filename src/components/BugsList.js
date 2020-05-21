import React from 'react'
import { StoreContext } from '../providers/StoreProvider'
import { useObserver } from 'mobx-react'

const BugsList = () => {
  const store = React.useContext(StoreContext)

  return useObserver(() => (
    <ul>
      { store.bugs.map( bug => (
        <li key={bug}>{ bug }</li>
      ))}
    </ul>
  ))
}

export default BugsList