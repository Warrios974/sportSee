import React from 'react'
import style from './Banner.module.css'

type bannerProps = {
  name: string | undefined,
  description: string
}

export default function Banner({name, description} : bannerProps) {
  return (
    <section className={style.mainContainer}>
      <h1 className={style.title}>Bonjour, <span>{name}</span></h1>
      <p className={style.description}>{description}</p>
    </section>
  )
}