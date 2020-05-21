import React from 'react'
import { StoreContext } from '../providers/StoreProvider'

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = React.useState("")

  return (
    <form
      onSubmit={e => {
        store.addBug(bug)
        setBug("")
        e.preventDefault()
      }}
    >
      <input
        type="text"
        value={bug}
        onChange={e => {
          setBug(e.target.value)
        }}
      />
      <button type="submit">Add New Bug</button>
    </form>
  )
}

export default BugsForm