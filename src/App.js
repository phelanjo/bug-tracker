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

function App() {
  return (
  <StoreProvider>
    <main>Bugs!</main>
  </StoreProvider>
  )
}

export default App;
