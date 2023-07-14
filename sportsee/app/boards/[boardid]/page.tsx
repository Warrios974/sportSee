import BarChartBoard from '@/src/components/barChart/BarChartBoard'
import React from 'react'
import style from './page.module.css'
import { PropsWithChildren } from 'react'
import LineChartBoard from '@/src/components/lineChart/LineChartBoard'
import RadarChartBoard from '@/src/components/radarChart/RadarChartBoard'
import RadialChartBoard from '@/src/components/radialChart/RadialChartBoard'
import Banner from '@/src/components/banner/Banner'
import { USER_MAIN_DATA } from '@/src/data/data'

type BoardPageProps = PropsWithChildren<{
  params: { boardid: string, }
  userId: number,
  user: Object
}>

export default function BoardPage({ params }: BoardPageProps) {  

  const users = USER_MAIN_DATA

  const user = users.find((user) => user.id === parseInt(params.boardid))
    
  return (
    <>
        <Banner 
          name={user?.userInfos.firstName}
          description='Félicitation ! Vous avez explosé vos objectifs hier 👏'
        />
        <div>
          <div className={style.pageContainer}>
            <div>
              <BarChartBoard 
                user={user}
                />
              <div>
                <LineChartBoard 
                  user={user}/>
                <RadarChartBoard 
                  user={user}/>
                <RadialChartBoard
                  user={user}/>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
    </>
  )
}
