import React from 'react'
import style from './page.module.css'
import Banner from '@/src/components/banner/Banner'
import { USER_MAIN_DATA as users } from '../src/data/data'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={style.pageContainer}>
      <Banner 
        name='Toi'
        description={'Selectionnez un profile ⏬'}
      />

      <div>
        {
          users.map((user) => (
            <Link 
              className={style.btn}
              href={`/boards/${user.id}`}
              key={user.id}
              >
              {user.userInfos.firstName}
              <div className={style.btn__bg}></div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
