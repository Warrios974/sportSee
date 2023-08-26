'use client'

import { getUserMainData } from '@/src/api/api';
import DataTransfromChart from '@/src/utils/models/DataTransfromChart';
import React, { useEffect, useState } from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis, Label } from 'recharts';
import style from './RadialChartBoard.module.css'
import { RadialChartType } from '@/src/utils/models/Types';
import { ChartsBoardProps } from '@/src/utils/models/Types';

export default function RadialChartBoard(props :ChartsBoardProps) {

    const { userID, setFetchError } = props

    const [chartData, setChartData] = useState<RadialChartType>([])
    
    useEffect(() =>{
      const getUserdata = async () => {
        const userData = await getUserMainData(userID)
      
        if (userData && 'erreur' in userData){
          console.log("Fetch error detected");
          setFetchError(true)
        }
        
        const dataTransfromChart = new DataTransfromChart(userData)
        const data = dataTransfromChart.radialChart
        setChartData(data)
      }
      getUserdata()
    }, [])
      
    return (
      <div className={style.radialChartBoardContainer}>
        <span className={style.lengend}>Score</span>
        <ResponsiveContainer width="99%" height="100%" aspect={0.972}>
          <RadialBarChart
            innerRadius="69%"
            barGap={0}
            barCategoryGap={-2}
            maxBarSize={15}
            data={chartData}
            startAngle={90}
            endAngle={450}
            margin={{
              top: 10
            }}
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
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
  )
}