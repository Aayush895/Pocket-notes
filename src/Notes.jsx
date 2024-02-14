import styles from './Notes.module.css'

const Notes = () => {
  return (
    <div className={styles.noteContainer}>
      <div className={styles.subnoteContainer}>
        <div className={styles.noteHeader}></div>
        <div className={styles.allNotes}></div>
        <div className={styles.addNotesContainer}>
          <div className={styles.addNotes}></div>
        </div>
      </div>
    </div>
  )
}
export default Notes
