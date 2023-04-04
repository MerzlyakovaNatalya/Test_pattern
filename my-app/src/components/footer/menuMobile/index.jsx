import React from "react"
import style from "./MenuMobile.module.scss"
import { menuMobileFooter } from "../../../mock"

export const MenuMobile = () => {
  return (
    <div className={style.wrap_menu_mobile}>
      <h3 className={style.title_mobile}>Меню</h3>
      <ul className={style.list_mobile}>
        {menuMobileFooter.map((item, index) => (
          <li className={style.item_mobile} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
