import styles from './PocketnotesHeader.module.css'
import Image from './assets/image-removebg-preview.png'
import { FaUnlockAlt } from 'react-icons/fa'

const PocketnotesHeader = () => {
  return (
    <div className={styles.pocketContainer}>
      <div className={styles.subContainer}>
        <div className={styles.imgContainer}>
          <img src={Image} alt="" />
        </div>
        <div className={styles.header}>
          <h1>Pocket Notes</h1>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
        </div>

        <footer>
          <FaUnlockAlt />
          <p>end-to-end encrypted</p>
        </footer>
      </div>
    </div>
  )
}
export default PocketnotesHeader
