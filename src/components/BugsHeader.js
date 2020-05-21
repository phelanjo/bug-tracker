import React from 'react'
import { StoreContext } from '../providers/StoreProvider'
import { useObserver } from 'mobx-react'

const BugsHeader = () => {
  const store = React.useContext(StoreContext)
  return useObserver(() => (
    <h1>
      {store.bugCount} { store.bugCount < 2 ? "bug" : "bugs"} currently in the list.
    </h1>
    )
  )
}

export default BugsHeader