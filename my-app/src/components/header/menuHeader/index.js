import React from "react"
import style from "./MenuHeader.module.scss"
import { menu, menuMobile } from "../../../mock"

export const MenuHeader = () => {
  return (
    <>
      <ul className={style.list}>
        {menu.map((item, index) => (
          <li key={index} className={style.item}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={style.list_mobile}>
        {menuMobile.map((item, index) => (
          <li key={index} className={style.item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
