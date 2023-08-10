'use client'

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from 'recharts';
import style from './LineChartBoard.module.css'
import DataTransfromChart from '@/src/utils/models/DataTransfromChart';
import { USER_AVERAGE_SESSIONS } from '@/src/data/data';
import { getUserAverageSessions } from '@/src/api/api';
import { LineChartType } from '@/src/utils/models/DataTransfromChart';

type LineChartBoardProps = {
  userID: number
}

export default function LineChartBoard(props : LineChartBoardProps) {

  const { userID } = props

  const [chartData, setChartData] = useState<LineChartType>([])
  const [currentIndexLineChart, setCurrentIndexLineChart] = useState(5)
  
  useEffect(() =>{
    const getUserdata = async () => {
      const userData = await getUserAverageSessions(userID)
      const dataTransfromChart = new DataTransfromChart(userData)
      const data = dataTransfromChart.lineChart
      setChartData(data)
    }
    getUserdata()
  }, [])

  const CustomTooltip = ({ payload, active } : any) => {
    if(active){
      return(
      <div style={{background: "white", padding: ".5rem"}}>
        <p>{`${payload[0].value}`} min</p>
      </div>
      )
    }
  }

  const CustomTooltip2 = ({ payload, active } : any) => {
    if(active){
      return(
      <div style={{background: "white", padding: ".5rem", height: "100%", width: "100%"}}>
        <p>{`${payload[0].value}`} min</p>
      </div>
      )
    }
  }

  return (
    <div className={style.lineChartBoardContainer}>
      <ResponsiveContainer 
        width="100%"
        height="100%"
        >
        <LineChart
          maxBarSize={2}
          data={chartData}
          margin={{
            top: 0,
            bottom: -70
          }}
          onMouseMove={(e) => setCurrentIndexLineChart(e.activeTooltipIndex || 0)}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#d8d8d89f" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#DEDEDE" tickMargin={-30}/>
          <YAxis hide padding={{top: 30, bottom: 31}} domain={[0, 100]}/>
          <Tooltip content={<CustomTooltip />}/> 
          <Legend content={<text>Durée moyenne des sessions</text>} wrapperStyle={{top: "2rem", left: "2rem", lineHeight: "20px", width: "150px", color: "#FFFFFFA0", fontSize: "15px"}}/>
          <Line type="natural" dataKey="sessionLength" dot={false} stroke="url(#colorUv)" activeDot={{ stroke: "none", r: 10 }}/>
          <ReferenceArea 
            x1={currentIndexLineChart} 
            x2={8} 
            y1={-70} 
            y2={200} 
            fill='#000000A1' 
            strokeOpacity={0.2} 
            ifOverflow='visible'
            style={{ margin: -20}}
            height={300}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
