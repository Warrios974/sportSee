'use client'

import { getUserMainData } from '@/src/api/api';
import { USER_MAIN_DATA } from '@/src/data/data';
import DataTransfromChart from '@/src/utils/models/DataTransfromChart';
import React, { useEffect, useState } from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis, Label, LabelProps } from 'recharts';
import style from './RadialChartBoard.module.css'
import { RadialChartType } from '@/src/utils/models/DataTransfromChart';

type RadialChartBoardProps = {
  userID: number
}

export default function RadialChartBoard(props :RadialChartBoardProps) {

    const { userID } = props

    const [chartData, setChartData] = useState<RadialChartType>([])
    
    useEffect(() =>{
      const getUserdata = async () => {
        const userData = await getUserMainData(userID)
        const dataTransfromChart = new DataTransfromChart(userData)
        const data = dataTransfromChart.radialChart
        setChartData(data)
      }
      getUserdata()
    }, [])
      
    return (
      <div className={style.radialChartBoardContainer}>
        <ResponsiveContainer width="99%" height="100%" aspect={0.972}>
          <RadialBarChart
            innerRadius="69%"
            barGap={0}
            barCategoryGap={-2}
            maxBarSize={15}
            data={chartData}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false}/>
            <PolarRadiusAxis tick={false} tickLine={false} hide={true} fill="" stroke="">
              <Label
                value={`${chartData[0]?.uv}%`}
                position="center"
                textAnchor="center"
                fill="var(--graphic-black-color)"
                fontSize="26px"
                fontWeight="bold"
                dy={-20}
              />
              <Label
                value={'de votre'}
                position="center"
                textAnchor="center"
                fill="#74798C"
                fontSize="15px"
                fontWeight="500"
                dy={10}
              />
              <Label
                value={'objectif'}
                position="center"
                textAnchor="center"
                fill="#74798C"
                fontSize="15px"
                fontWeight="500"
                dy={30}
              />
            </PolarRadiusAxis>
            <RadialBar
              background={{ fill: 'white' }}
              fill="#E60000"
              color=""
              dataKey="uv"
              cornerRadius="50%"
            />
            <Legend width={200} content={<text>Score</text>} wrapperStyle={{top: "0rem", left: "2rem", lineHeight: "20px", width: "150px",fontWeight: "bold"}}/>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
  )
}