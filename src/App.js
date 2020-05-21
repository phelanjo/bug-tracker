import React from 'react'
import { useLocalStore } from 'mobx-react';

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"],
    addBug: (bug) => {
      store.bugs.push(bug)
    }
  }))

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

const BugsList = () => {
  const store = React.useContext(StoreContext)

  return (
    <ul>
      { store.bugs.map( bug => (
        <li key={bug}>{ bug }</li>
      ))}
    </ul>
  )
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
      <BugsList />
      <BugsForm />
    </main>
  </StoreProvider>
  )
}

export default App;
