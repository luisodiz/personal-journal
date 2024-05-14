import React from 'react'
import cls from 'classnames'
import styles from './Button.module.scss'

const Button: React.FC = () => {
  return (
    <button className={cls(styles.button, styles.button_accent)}>
      Сохранить
    </button>
  )
}

export default Button
