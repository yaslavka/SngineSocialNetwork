import React from 'react'
import styles from './index.module.scss'

function AuthInput({ className, field, form, ...props }) {
  return (
    <>
      <input
        autoFocus
        required
        className={`${className} ${styles.inputForm}`}
        {...field}
        {...props}
      />
    </>
  )
}

export default AuthInput
