/* eslint-disable react/prop-types */
import styles from './NoteCard.module.css'
import { NoteContext } from './utils/NoteContext'
import { ShowNoteContext } from './utils/ShowNoteContext'
import { useContext } from 'react'

const NoteCard = ({ groupName, groupColor, groupInitials, tabIdx }) => {
  const { noteGroup, setnoteGroup, setshowNotes } = useContext(NoteContext)
  const { setisNote } = useContext(ShowNoteContext)

  const handleClick = (e) => {
    e.stopPropagation()

    const newUpdatedNoteGroup = noteGroup.map((note) => {
      if (
        note.groupName === e?.target?.innerText ||
        note.groupName === e?.target?.children[1]?.children[0]?.innerText
      ) {
        return { ...note, isGroupClicked: true }
      } else {
        return { ...note, isGroupClicked: false }
      }
    })

    setnoteGroup(newUpdatedNoteGroup)
    setshowNotes(true)
    setisNote(true)
  }

  return (
    <div className={styles.noteCard} onClick={handleClick} tabIndex={tabIdx}>
      <div
        className={styles.noteInitials}
        style={{ backgroundColor: groupColor }}
      >
        <h1>{groupInitials}</h1>
      </div>
      <div className={styles.noteName}>
        <h1>{groupName}</h1>
      </div>
    </div>
  )
}
export default NoteCard
