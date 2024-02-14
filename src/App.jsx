import AddNotes from './AddNotes'
import Notes from './Notes'
import PocketnotesHeader from './PocketnotesHeader'
import { NoteContext } from './utils/NoteContext'
import { useState } from 'react'

function App() {
  const [noteGroup, setnoteGroup] = useState([])
  const [showNotes, setshowNotes] = useState(false)

  
  return (
    <main>
      <NoteContext.Provider
        value={{ noteGroup, setnoteGroup, showNotes, setshowNotes }}
      >
        <AddNotes />
        {showNotes ? <Notes /> : <PocketnotesHeader />}
      </NoteContext.Provider>
    </main>
  )
}

export default App
