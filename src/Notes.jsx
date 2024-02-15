import styles from './Notes.module.css'
import { NoteContext } from './utils/NoteContext'
import { useContext, useState } from 'react'

const Notes = () => {
  let { noteGroup, setnoteGroup } = useContext(NoteContext)
  const [addNote, setaddNote] = useState('')

  const handleNoteChange = (e) => {
    setaddNote(e.target.value)
  }

  const handleAddNote = () => {
    noteGroup.map((note) => {
      if (note.isGroupClicked) {
        const updatedNote = { ...note, notes: [...note.notes, addNote] }
        const updatedNoteGroup = noteGroup.map((group) =>
          group.isGroupClicked ? updatedNote : group
        )
        setnoteGroup(updatedNoteGroup)
        setaddNote('')
      }
    })
  }

  return (
    <div className={styles.noteContainer}>
      <div className={styles.subnoteContainer}>
        <div className={styles.noteHeader}>
          {noteGroup.map((note) => {
            if (note.isGroupClicked) {
              return (
                <>
                  <div
                    className={styles.noteGroupIni}
                    style={{ backgroundColor: note.groupColor }}
                    key={noteGroup.id}
                  >
                    <h1>{note.groupInitials}</h1>
                  </div>
                  <h1>{note.groupName}</h1>
                </>
              )
            }
          })}
        </div>

        <div className={styles.allNotes}>
          {noteGroup.map((note) => {
            if (note.isGroupClicked) {
              return note.notes.map((item, idx) => {
                return <p key={idx}>{item}</p>
              })
            }
          })}
        </div>

        <div className={styles.addNotesContainer}>
          <div className={styles.addNotes}>
            <textarea
              name="addNotes"
              placeholder="Enter your text here........."
              cols="110"
              rows="15"
              value={addNote}
              onChange={handleNoteChange}
            />
          </div>
          <button onClick={handleAddNote}>Add Note</button>
        </div>
      </div>
    </div>
  )
}
export default Notes
