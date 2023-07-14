import React from 'react'
import style from './header.module.css'
import Image from 'next/image'
import logo from '../../assets/logo.svg'
import Nenu from '../menu/Menu'

export default function Header() {
  return (
    <header className={style.headerContainer}>
    <Image
      className={style.logo}
      src={logo}
      alt="Logo SportSee"
    />
    <Nenu />
    </header>
  )
}