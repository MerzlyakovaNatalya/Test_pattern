import React from "react"
import style from "./Content.module.scss"
import { Present } from "./present"

export const Content = () => {
  return (
    <div className={style.box}>
      <div className={style.container}>
        <div className={style.wrap_title}>
          <h1 className={style.title}>Зарабатывайте больше</h1>
          <h2 className={style.caption}>с WELBEX</h2>
          <p className={style.subtitle}>
            Развиваем и контролируем продажи за вас
          </p>
        </div>
        <div className={style.wrapper}>
          <p className={style.wrap_heading}>
            Вместе с{" "}
            <span className={style.text_span}>
              бесплатной <br /> консультацией
            </span>{" "}
            мы дарим:
          </p>
          <Present />
          <button className={style.button}>Получить консультацию</button>
        </div>
      </div>
    </div>
  )
}
