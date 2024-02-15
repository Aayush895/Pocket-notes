import styles from './Notes.module.css'
import { NoteContext } from './utils/NoteContext'
import { useContext } from 'react'

const Notes = () => {
  const {noteGroup} = useContext(NoteContext)

  return (
    <div className={styles.noteContainer}>

      <div className={styles.subnoteContainer}>

        <div className={styles.noteHeader}>
          {noteGroup.map((note) => {
            if(note.isGroupClicked) {
              return (<>
                <div className={styles.noteGroupIni} style={{backgroundColor: note.groupColor}} key={noteGroup.id}>
                  <h1>{note.groupInitials}</h1>
                </div>
                <h1>{note.groupName}</h1>
              </>)
            }
          })}
        </div>

        <div className={styles.allNotes}></div>

        <div className={styles.addNotesContainer}>
          <div className={styles.addNotes}>
            <textarea name='addNotes' placeholder='Enter your note here....' cols="170" rows="15"/>
          </div>
        </div>

      </div>

    </div>
  )
}
export default Notes
