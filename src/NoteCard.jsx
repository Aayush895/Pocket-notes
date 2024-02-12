/* eslint-disable react/prop-types */
import styles from './NoteCard.module.css'

const NoteCard = ({groupName, groupColor, groupInitials}) => {
  console.log(groupName)
  console.log(groupColor)
  console.log(groupInitials)
  return (
    <div className={styles.noteCard}>
      <div className={styles.noteInitials} style={{backgroundColor: groupColor}}>
        <h1>{groupInitials}</h1>
      </div>
      <div className={styles.noteName}>
        <h1>{groupName}</h1>
      </div>
    </div>
  )
}
export default NoteCard