import React from 'react'
import { useLocalStore, useObserver } from 'mobx-react';

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"],
    addBug: (bug) => {
      store.bugs.push(bug)
    },
    get bugCount() {
      return store.bugs.length
    }
  }))

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

const BugsHeader = () => {
  const store = React.useContext(StoreContext)
  return useObserver(() => (
    <h1>
      {store.bugCount} { store.bugCount < 2 ? "bug" : "bugs"} currently in the list.
    </h1>
    )
  )
}

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

function App() {
  return (
  <StoreProvider>
    <main>
      <BugsHeader />
      <BugsList />
      <BugsForm />
    </main>
  </StoreProvider>
  )
}

export default App;
