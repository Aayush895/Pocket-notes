/* eslint-disable react/prop-types */
import styles from './NoteCard.module.css'
import { NoteContext } from './utils/NoteContext'
import { useContext } from 'react'

const NoteCard = ({ groupName, groupColor, groupInitials }) => {
  const { noteGroup, setshowNotes  } = useContext(NoteContext)

  const handleClick = (e) => {
    e.stopPropagation()
    noteGroup.map((note) => {
      if(note.isGroupClicked) {
        note.isGroupClicked = false
      }

      if(note.groupName == e.target.children[1].children[0].innerText) {
        note.isGroupClicked = true
      }
    })
    setshowNotes(true)
  }

  return (
    <div className={styles.noteCard} onClick={handleClick}>
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
