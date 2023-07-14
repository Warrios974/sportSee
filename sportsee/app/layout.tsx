import Header from '@/src/components/header/Header'
import './globals.css'
import Sidebar from '@/src/components/sidebar/Sidebar'
import { PropsWithChildren } from 'react'
import style from "./layout.module.css";

type RootLayoutProps = PropsWithChildren<{
  children: React.ReactNode
}>

export default function RootLayout( {children} : RootLayoutProps) {
  return (
    <html lang="fr">
      <head />
      <body>
        <Header />
        <main className={style.mainContainer}>
          <Sidebar />
          <div className={style.pageContainer}>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
