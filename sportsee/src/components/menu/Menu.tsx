import React from 'react'
import style from './Menu.module.css'
import Link from 'next/link'

export default function Menu() {

    const links = ["Accueil", "Profil", "Réglages", "Communauté" ]

  return (
    <ul className={style.menuContainer}>
        {
            links.map((link, index) => (
                <li 
                    key={`${index}-link`} 
                    className={style.menuItem}>
                    <Link href="/">{link}</Link>
                </li>
            ))
        }
    </ul>
  )
}