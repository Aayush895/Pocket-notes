/* eslint-disable react/prop-types */
import styles from './AddNoteModal.module.css'
import { useState } from 'react'

const AddNoteModal = ({ setshowModal, noteGroup, setnoteGroup }) => {
  const [input, setinput] = useState('')
  const [grpColor, setgrpColor] = useState(null)
  // const [isClicked, setisClicked] = useState(false)

  const closeAddNote = () => {
    setshowModal(false)
  }

  const getInitials = (input) => {
    let str = ''
    let arr = input.split(' ')
    console.log(arr.length)
    if (arr.length == 1) {
      str = arr[0].charAt(0)
    } else {
      str = arr[0].charAt(0) + arr[arr.length - 1].charAt(0)
    }

    return str
  }

  const addNote = () => {
    const initials = getInitials(input)

    setnoteGroup([
      ...noteGroup,
      { groupName: input, groupColor: grpColor, groupInitials: initials },
    ])
  }

  const fetchColor = (e) => {
    // if (isClicked) {
    //   setisClicked(false)
    // }
    // setisClicked(true)
    const div = document.getElementsByClassName(e.target.className)[0]
    setgrpColor(window.getComputedStyle(div).backgroundColor)
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h2>Create new group</h2>
        <label htmlFor="group">
          Group Name
          <input
            type="text"
            name="group"
            id="group"
            placeholder="Enter group name"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
        </label>

        <div className={styles.chooseColor}>
          <h2>Choose colour</h2>
          <div className={styles.colorOption} onClick={fetchColor}>
            <div className={`${styles.color} ${styles.color1}`}></div>
            <div className={`${styles.color} ${styles.color2}`}></div>
            <div className={`${styles.color} ${styles.color3}`}></div>
            <div className={`${styles.color} ${styles.color4}`}></div>
            <div className={`${styles.color} ${styles.color5}`}></div>
            <div className={`${styles.color} ${styles.color6}`}></div>
          </div>
        </div>

        <button
          onClick={() => {
            addNote()
            closeAddNote()
          }}
        >
          Create
        </button>
      </div>
    </div>
  )
}
export default AddNoteModal