import React from "react"
import { Contacts } from "./contacts"
import { Copyright } from "./copyright"
import { MenuMobile } from "./menuMobile"
import { MenuFooter } from "./menuFooter"
import style from "./Footer.module.scss"

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrap}>
        <div className={style.holder}>
          <h3 className={style.title}>О компании</h3>
          <ul className={style.items}>
            <li className={style.item}>Партнёрская программа</li>
            <li className={style.item}>Вакансии</li>
          </ul>
        </div>
        <MenuFooter />
        <MenuMobile />
        <Contacts />
      </div>
      <Copyright/>
    </div>
  )
}
