import { useContext, useState, useEffect } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import NoteCard from './NoteCard'
import styles from './AddNotes.module.css'
import AddNoteModal from './AddNoteModal'
import { NoteContext } from './utils/NoteContext'
import { ShowNoteContext } from './utils/ShowNoteContext'

const AddNotes = () => {
  const [showModal, setshowModal] = useState(false)
  const { noteGroup, setshowNotes } = useContext(NoteContext)
  const { isNote } = useContext(ShowNoteContext)
  /**
   * IMP: I have to store the note groups and all the notes within the note groups inside 'localStorage'.
   */

  const toggleModal = (e) => {
    e.stopPropagation()
    setshowModal(!showModal)
  }

  const handleClick = () => {
    setshowNotes(false)
  }

  // Adding noteGroups to localStorage through useEffect
  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(noteGroup))
  }, [noteGroup])

  return (
    <>
      <div
        className={styles.notesContainer}
        onClick={handleClick}
        style={{ display: window.innerWidth <= 428 && isNote ? 'none' : null }}
      >
        <header className={styles.notesHeader}>
          <h1>Pocket Notes</h1>
        </header>
        <IoMdAddCircle className={styles.addNotes} onClick={toggleModal} />

        <div className={styles.newNoteContainer}>
          {noteGroup.length > 0
            ? noteGroup.map((group, index) => {
                return (
                  <NoteCard
                    key={index}
                    groupName={group?.groupName}
                    groupColor={group?.groupColor}
                    groupInitials={group?.groupInitials}
                    tabIdx={index}
                  />
                )
              })
            : null}
        </div>
      </div>

      {showModal ? <AddNoteModal setshowModal={setshowModal} /> : null}
    </>
  )
}
export default AddNotes
