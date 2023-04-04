import React from "react"
import style from "./Copyright.module.scss"

export const Copyright = () => {
  return (
    <div className={style.box}>
      <p className={style.text}>©WELBEX 2022. Все права защищены.</p>
      <p className={style.text}>Политика конфиденциальности</p>
    </div>
  )
}
