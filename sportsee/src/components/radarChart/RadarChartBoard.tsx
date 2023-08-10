'use client'

import { getUserPerformance } from '@/src/api/api';
import DataTransfromChart from '@/src/utils/models/DataTransfromChart';
import React, { useEffect, useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import style from './RadarChartBoard.module.css'

export default function RadarChartBoard(props: any) {

    const { userID } = props

    const [chartData, setChartData] = useState([])
    
    useEffect(() =>{
      const getUserdata = async () => {
        const userData = await getUserPerformance(userID)
        const dataTransfromChart = new DataTransfromChart(userData)
        const data = dataTransfromChart.radarChart
        setChartData(data)
      }
      getUserdata()
    }, [])

  return (
    <div className={style.radialChartBoardContainer}>
      <ResponsiveContainer width="99%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData} margin={{
            top: 100
          }}>
            <PolarGrid gridType="polygon" radialLines={false} />
            <PolarAngleAxis dataKey="subject" stroke="#DEDEDE" domain={[0, 300]} tickLine={false} fontSize={12} />
            <Radar name="Mike" dataKey="A" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}