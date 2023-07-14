import Link from 'next/link'
import React from 'react'
import style from "./navbar.module.css";
import Image from 'next/image'
import relaxation from '../../assets/relaxation.svg'
import velo from '../../assets/velo.svg'
import nage from '../../assets/nage.svg'
import halteres from '../../assets/halteres.svg'

export default function Navbar() {
  return (
    <nav className={style.nav}>
        <Link href='/' className={style.navItems}>
        <Image
            src={relaxation}
            alt=""
        />
        </Link>
      <Link href='/' className={style.navItems}>
        <Image
          src={velo}
          alt=""
        />
      </Link>
      <Link href='/' className={style.navItems}>
        <Image
          src={nage}
          alt=""
        />
      </Link>
      <Link href='/' className={style.navItems}>
        <Image
          src={halteres}
          alt=""
        />
      </Link>
    </nav>
  )
}