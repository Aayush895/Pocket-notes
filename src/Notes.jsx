import styles from './Notes.module.css'
import { NoteContext } from './utils/NoteContext'
import { ShowNoteContext } from './utils/ShowNoteContext'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { useContext, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

const Notes = () => {
  let { noteGroup, setnoteGroup } = useContext(NoteContext)
  const { isNote, setisNote } = useContext(ShowNoteContext)
  const [addNote, setaddNote] = useState('')

  const handleNoteChange = (e) => {
    setaddNote(e.target.value)
  }

  const handleAddNote = () => {
    if (addNote != '') {
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
  }

  const handleShowNote = () => {
    setisNote(false)
  }

  return (
    <div
      className={styles.noteContainer}
      style={{
        width: window.innerWidth <= 428 && isNote ? '100%' : null,
        display: window.innerWidth <= 428 && !isNote ? 'none' : null,
      }}
    >
      <div className={styles.subnoteContainer}>
        <div className={styles.noteHeader}>
          {window.innerWidth <= 428 ? (
            <FaArrowLeftLong onClick={handleShowNote} />
          ) : null}

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
                return (
                  <p key={idx} className={styles.note}>
                    {item}
                  </p>
                )
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

          <RiSendPlane2Fill
            size="30"
            onClick={handleAddNote}
            className={styles.submitNote}
          />
        </div>
      </div>
    </div>
  )
}
export default Notes
