import { useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import NoteCard from './NoteCard'
import styles from './AddNotes.module.css'
import AddNoteModal from './AddNoteModal'

const AddNotes = () => {
  const [showModal, setshowModal] = useState(false)
  const [noteGroup, setnoteGroup] = useState([])

  const toggleModal = () => {
    setshowModal(!showModal)
  }

  return (
    <>
      <div className={styles.notesContainer}>
        <header className={styles.notesHeader}>
          <h1>Pocket Notes</h1>
        </header>
        <IoMdAddCircle className={styles.addNotes} onClick={toggleModal} />

        <div className={styles.newNoteContainer}>
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>

      {showModal ? (
        <AddNoteModal
          setshowModal={setshowModal}
          noteGroup={noteGroup}
          setnoteGroup={setnoteGroup}
        />
      ) : null}
    </>
  )
}
export default AddNotes
