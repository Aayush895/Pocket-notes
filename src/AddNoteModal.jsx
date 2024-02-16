/* eslint-disable react/prop-types */

import styles from './AddNoteModal.module.css'
import { useState, useContext } from 'react'
import { NoteContext } from './utils/NoteContext'

const AddNoteModal = ({ setshowModal }) => {
  const [input, setinput] = useState('')
  const [grpColor, setgrpColor] = useState(null)
  const [isColorSelected, setisColorSelected] = useState(false)

  const { noteGroup, setnoteGroup } = useContext(NoteContext)
 

  const closeAddNote = () => {
    if (isColorSelected) {
      setshowModal(false)
    } else {
      alert('Please choose a color for your note group')
    }
  }

  const getInitials = (input) => {
    let str = ''
    let arr = input.split(' ')

    if (arr.length == 1) {
      str = arr[0].charAt(0)
    } else {
      str = arr[0].charAt(0) + arr[arr.length - 1].charAt(0)
    }

    return str
  }

  const addNote = () => {
    if (isColorSelected) {
      const initials = getInitials(input)

      setnoteGroup([
        ...noteGroup,
        {
          groupName: input,
          groupColor: grpColor,
          groupInitials: initials,
          id: noteGroup.length,
          isGroupClicked: false,
          notes: [],
        },
      ])
    }
  }

  const fetchColor = (e) => {
    const div = document.getElementsByClassName(e.target.className)[0]
    setisColorSelected(true)
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
