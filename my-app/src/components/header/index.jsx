import React from "react"
import { Message } from "../../image/message"
import { PhoneSvg } from "../../image/phone"
import { WhatsApp } from "../../image/whatsApp"
import { Logotype } from "./logotype"
import { MenuHeader } from "./menuHeader"
import { Phone } from "./phone"
import style from "./Header.module.scss"

export const Header = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Logotype />
        <MenuHeader/>
        <Phone />
        <div className={style.contacts}>
          <Message />
          <PhoneSvg />
          <WhatsApp />
        </div>
      </div>
    </>
  )
}
