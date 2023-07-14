'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import style from './LineChartBoard.module.css'
import DataTransfromChart from '@/src/utils/models/DataTransfromChart';
import { USER_AVERAGE_SESSIONS } from '@/src/data/data';

export default function LineChartBoard(props : any) {

  const { user } = props

  const userActivity = USER_AVERAGE_SESSIONS.find(element => element.userId === user.id)
  
  const lineCharData = new DataTransfromChart(userActivity);

  const data = lineCharData.lineChart

  const CustomTooltip = ({ payload, active } : any) => {
    if(active){
      return(
      <div style={{background: "white", padding: ".5rem"}}>
        <p>{`${payload[0].value}`} min</p>
      </div>
      )
    }
  }

  const CustomLegend = ({ payload } : any) => {
    return(
      <ul>
        <li>
          <span>Durée moyenne des sessions</span>
        </li>
      </ul>
    )
  }

  return (
    <div style={{width: "33%", height: "100%", background: "#E60000", padding: "1rem"}}>
      <ResponsiveContainer 
        width="100%"
        height="100%"
        >
        <LineChart
          width={500}
          height={100}
          data={data}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#DEDEDE"/>
          <Tooltip content={<CustomTooltip />}/>
          <Legend content={<CustomLegend />} wrapperStyle={{top: 0, lineHeight: "20px", width: "100%"}}/>
          <Line type="natural" dataKey="sessionLength" stroke="#DEDEDE" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
