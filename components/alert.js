import React from 'react'
import styles from './alert.module.css';
import { clsx } from 'clsx';

const alert = ({children, type}) => {
  return (
    <div
    className={clsx({
      [styles.success]: type === 'success',
      [styles.error]: type === 'error',
    })}
  >
    {children}
  </div>
  )
}

export default alert;