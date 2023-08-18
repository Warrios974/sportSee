import React from 'react'
import style from './Banner.module.css'
import { BannerProps } from '@/src/utils/models/Types'

export default function Banner({name, description} : BannerProps) {
  return (
    <section className={style.mainContainer}>
      <h1 className={style.title}>Bonjour, <span>{name}</span></h1>
      <p className={style.description}>{description}</p>
    </section>
  )
}