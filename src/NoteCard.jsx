import styles from './NoteCard.module.css'

const NoteCard = () => {
  return (
    <div className={styles.noteCard}>
      <div className={styles.noteInitials}>
        <h1>NI</h1>
      </div>
      <div className={styles.noteName}>
        <h1>New Note</h1>
      </div>
    </div>
  )
}
export default NoteCard