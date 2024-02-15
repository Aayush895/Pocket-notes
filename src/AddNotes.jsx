import { useContext, useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import NoteCard from './NoteCard'
import styles from './AddNotes.module.css'
import AddNoteModal from './AddNoteModal'
import { NoteContext } from './utils/NoteContext'

const AddNotes = () => {
  const [showModal, setshowModal] = useState(false)
  const { noteGroup, setshowNotes } = useContext(NoteContext)

  /**
   *  1.) Make the notes scrollable.
   *
   * IMP: I have to store the note groups and all the notes within the note groups inside 'localStorage'.
   */

  const toggleModal = () => {
    setshowModal(!showModal)
  }

  const handleClick = () => {
    setshowNotes(false)
  }

  return (
    <>
      <div className={styles.notesContainer} onClick={handleClick}>
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
