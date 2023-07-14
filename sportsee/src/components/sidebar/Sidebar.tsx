import React from 'react'
import style from './sidebar.module.css'
import Navbar from '../navbar/Navbar'

export default function Sidebar() {
  return (
    <div className={style.sidebarContainer}>
      <Navbar />
      <span className={style.copyRight}>Copiryght, SportSee 2020</span>
    </div>
  )
}