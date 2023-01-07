import React from 'react'
import styles from './TextInputName.module.css';

const TextInputName = (props) => {
  return (
    <div className={styles.otpBox}>
      <input  placeholder='Debugger Champ' title='please enter your name ' type="text" maxLength="20" className={styles.space} {...props} />
    </div>
  )
}

export default TextInputName