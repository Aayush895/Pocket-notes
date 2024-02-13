import AddNotes from './AddNotes'
import PocketnotesHeader from './PocketnotesHeader'
import { NoteContext } from './utils/NoteContext'
import { useState } from 'react'

function App() {
  const [noteGroup, setnoteGroup] = useState([])
  return (
    <main>
      <NoteContext.Provider value={{ noteGroup, setnoteGroup }}>
        <AddNotes />
        <PocketnotesHeader />
      </NoteContext.Provider>
    </main>
  )
}

export default App
