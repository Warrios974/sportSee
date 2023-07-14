'use client'

import { USER_PERFORMANCE } from '@/src/data/data';
import DataTransfromChart from '@/src/utils/models/DataTransfromChart';
import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function RadarChartBoard(props: any) {

    const { user } = props

    const userActivity = USER_PERFORMANCE.find(element => element.userId === user.id)
    
    const radarChartData = new DataTransfromChart(userActivity);

    const data = radarChartData.radarChart

  return (
    <div style={{width: "33%", height: "100%", background: "#282D30", padding: "1rem"}}>
      <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid gridType="polygon" radialLines={false} />
            <PolarAngleAxis dataKey="subject" stroke="#DEDEDE" domain={[0, 300]} tickLine={false}/>
            <Radar name="Mike" dataKey="A" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}