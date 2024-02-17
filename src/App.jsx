import AddNotes from './AddNotes'
import Notes from './Notes'
import PocketnotesHeader from './PocketnotesHeader'
import { NoteContext } from './utils/NoteContext'
import { ShowNoteContext } from './utils/ShowNoteContext'
import { useState } from 'react'

function getStorageItems() {
  let group = localStorage.getItem('groups')

  if (group) {
    return JSON.parse(localStorage.getItem('groups'))
  } else {
    return []
  }
}

function App() {
  const [noteGroup, setnoteGroup] = useState(getStorageItems())
  const [showNotes, setshowNotes] = useState(false)
  const [isNote, setisNote] = useState(false)

  return (
    <main>
      <ShowNoteContext.Provider value={{ isNote, setisNote }}>
        <NoteContext.Provider
          value={{ noteGroup, setnoteGroup, showNotes, setshowNotes }}
        >
          <AddNotes />
          {showNotes ? <Notes /> : <PocketnotesHeader />}
        </NoteContext.Provider>
      </ShowNoteContext.Provider>
    </main>
  )
}

export default App
