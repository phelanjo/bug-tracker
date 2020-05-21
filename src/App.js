import React from 'react'
import StoreProvider from './providers/StoreProvider'
import BugsHeader from './components/BugsHeader'
import BugsList from './components/BugsList'
import BugsForm from './components/BugsForm'

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
