import React from 'react'
import styles from '../TextInput/TextInputModal.module.css';

const TextInputModal = (props) => {
  return (
    <div className={styles.otpBox}>
      <input  title='please enter Room topic name' type="text" maxLength="35" className={styles.space} {...props} />
    </div>
  )
}

export default TextInputModal