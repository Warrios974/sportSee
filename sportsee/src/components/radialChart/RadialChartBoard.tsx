'use client'

import { USER_MAIN_DATA } from '@/src/data/data';
import DataTransfromChart from '@/src/utils/models/DataTransfromChart';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

export default function RadialChartBoard(props) {

    const { user } = props

    const userActivity = USER_MAIN_DATA.find(element => element.id === user.id)
    
    const radialChartData = new DataTransfromChart(userActivity);

    const data = radialChartData.radialChart
      
    const style = {
      top: '50%',
      right: 0,
      transform: 'translate(0, -50%)',
      lineHeight: '24px',
    };

    const circleSize = 100;
      
    return (
    <ResponsiveContainer width="33%" height="100%">
        <RadialBarChart
          width={200} 
          height={200}
          innerRadius={12}
          outerRadius={18}
          barSize={5}
          data={data}
          startAngle={90}
          endAngle={-270}
          barGap={50}
          >
          <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
          />
          <RadialBar
          background
          dataKey="value"
          cornerRadius={circleSize / 2}
          fill="#82ca9d"
          />
          <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
          25
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
  )
}