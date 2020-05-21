import React from 'react'
import { useLocalStore } from 'mobx-react'
import BugsHeader from './components/BugsHeader'
import BugsList from './components/BugsList'
import BugsForm from './components/BugsForm'



export const StoreContext = React.createContext()

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
