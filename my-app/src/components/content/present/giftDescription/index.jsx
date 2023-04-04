import React from "react"
import style from "./GiftDescription.module.scss"

export const GiftDescription = ({ title, description }) => {
  return (
    <div className={style.wrapper_text}>
      <p className={style.subject}>{title}</p>
      <p className={style.text}>{description}</p>
    </div>
  )
}
