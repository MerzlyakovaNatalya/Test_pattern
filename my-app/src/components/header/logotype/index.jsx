import React from "react"
import style from "./Logotype.module.scss"
import { Logo } from "../../../image/logo"

export const Logotype = () => {
  return (
    <div className={style.wrapper_logo}>
      <Logo />
      <p className={style.text}>
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  )
}
