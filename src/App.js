import React from 'react'
import { useLocalStore } from 'mobx-react';

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"]
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

function App() {
  return (
  <StoreProvider>
    <main>
      <BugsList />
    </main>
  </StoreProvider>
  )
}

export default App;
