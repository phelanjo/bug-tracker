import React from 'react'
import { useLocalStore } from 'mobx-react';

const store = useLocalStore(() => ({
  bugs: ["Centipede"]
}))

function App() {
  return <main>Bugs!</main>
}

export default App;
