import React from "react"
import style from "./MenuFooter.module.scss"
import { menuFirst, menuSecond } from "../../../mock"

export const MenuFooter = () => {
  return (
    <>
      <div className={style.wrap_menu}>
        <h3 className={style.title}>Меню</h3>
        <ul className={style.items}>
          {menuFirst.map((item, index) => (
            <li className={style.item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ul className={style.list}>
        {menuSecond.map((item, index) => (
          <li className={style.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
