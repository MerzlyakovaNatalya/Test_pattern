import React from "react"
import style from "./Present.module.scss"
import { linkMobile } from "../../../mock"
import { Line } from "../../../image/line"
import { GiftDescription } from "./giftDescription"

export const Present = () => {
  return (
    <>
      <div className={style.box}>
        <GiftDescription title={"Виджеты"} description={"30 готовых решений"} />
        <GiftDescription title={"Dashboard"} description={"с показателями вашего бизнеса"} />
        <GiftDescription title={"Skype Аудит"} description={"отдела продаж и CRM системы"} />
        <GiftDescription title={"35 дней"} description={"использования CRM"} />
      </div>
      <div className={style.box_mobile}>
        {linkMobile.map((item, index) => (
          <p key={index} className={style.text_mobile}>
            <Line />
            <span className={style.span_mobile}>{item}</span>
          </p>
        ))}
      </div>
    </>
  )
}
