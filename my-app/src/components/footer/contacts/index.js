import React from "react"
import style from "./Contacts.module.scss"
import { Message } from "../../../image/message"
import { PhoneSvg } from "../../../image/phone"
import { WhatsApp } from "../../../image/whatsApp"

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <h3 className={style.title}>Контакты</h3>
      <p className={style.text}>+7 555 555-55-55</p>
      <div className={style.socials}>
        <Message />
        <PhoneSvg />
        <WhatsApp />
      </div>
      <p className={style.text}>Москва, Путевой проезд 3с1, к 902</p>
    </div>
  )
}
