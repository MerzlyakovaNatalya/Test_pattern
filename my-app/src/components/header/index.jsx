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
        {/* <div>
          <p className={style.text_phone}>+7 555 555-55-55</p>
        </div> */}
        <div className={style.contacts}>
          <Message />
          <PhoneSvg />
          <WhatsApp />
        </div>
      </div>
    </>
  )
}
