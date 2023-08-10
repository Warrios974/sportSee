'use client'

import BarChartBoard from '@/src/components/barChart/BarChartBoard'
import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import { PropsWithChildren } from 'react'
import LineChartBoard from '@/src/components/lineChart/LineChartBoard'
import RadarChartBoard from '@/src/components/radarChart/RadarChartBoard'
import RadialChartBoard from '@/src/components/radialChart/RadialChartBoard'
import Banner from '@/src/components/banner/Banner'
import { USER_MAIN_DATA } from '@/src/data/data'
import { getUserMainData } from '@/src/api/api'
import SingleValueContainer from '@/src/components/singleValueContainer/SingleValueContainer'

type dataType = {
  id: number,
  userInfos: {
      firstName: string,
      lastName: string,
      age: number,
  },
  todayScore: number,
  keyData: {
      calorieCount: number,
      proteinCount: number,
      carbohydrateCount: number,
      lipidCount: number
  }
} | {
  id: number,
  userInfos: {
      firstName: string,
      lastName: string,
      age: number,
  },
  score: number,
  keyData: {
      calorieCount: number,
      proteinCount: number,
      carbohydrateCount: number,
      lipidCount: number
  }
}

type BoardPageProps = PropsWithChildren<{
  params: { boardid: string, }
  userId: number,
  user: Object
}>

export default function BoardPage({ params }: BoardPageProps) {  

  const userID = Number(params.boardid)
  
  const [userData, setUserData] = useState<dataType>()

  useEffect(() => {
    const getUserdata = async () => {
      const userData = await getUserMainData(userID)
      setUserData(userData)
    }
    getUserdata()
  }, [])

  const keyData = userData?.keyData

  if(userData && keyData) return (
    <div className={style.page}>
        <Banner 
          name={userData?.userInfos.firstName}
          description='Félicitation ! Vous avez explosé vos objectifs hier 👏'
        />
        <div className={style.pageContainer}>
          <div className={style.charts}>
            <BarChartBoard 
              userID={userID}
              />
            <div>
              <LineChartBoard 
                userID={userID}/>
              <RadarChartBoard 
                userID={userID}/>
              <RadialChartBoard
                userID={userID}/>
            </div>
          </div>
          <div className={style.sidebar}>
              <SingleValueContainer 
                urlImage='/energy.svg'
                type='Calories'
                unity='kCal'
                number={keyData.calorieCount}
                color='calorie'
              />
              <SingleValueContainer 
                urlImage='/chicken.svg'
                type='Protéines'
                unity='g'
                number={keyData.proteinCount}
                color='proteine'
              />
              <SingleValueContainer 
                urlImage='/apple.svg'
                type='Glucides'
                unity='g'
                number={keyData.carbohydrateCount}
                color='glucide'
              />
              <SingleValueContainer 
                urlImage='/cheeseburger.svg'
                type='Lipides'
                unity='g'
                number={keyData.lipidCount}
                color='lipide'
              />
          </div>
        </div>
    </div>
  )
}
