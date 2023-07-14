'use client'

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import style from './BarChartBoard.module.css'
import DataTransfromChart from '@/src/utils/models/DataTransfromChart';
import { USER_ACTIVITY } from '@/src/data/data';


export default function BarChartBoard(props : any) {

  const { user } = props

  const userActivity = USER_ACTIVITY.find(element => element.userId === user.id)
  
  const data = new DataTransfromChart(userActivity);

  const newData = data.barChart

  const CustomTooltip = ({ payload, active } : any) => {
    if(active){
      return(
      <div className={style.TooltipBarChart}>
        <p>{`${payload[0].value}`} kg</p>
        <p>{`${payload[1].value}`} kCal</p>
      </div>
      )
    }
  }

  const CustomLegend = ({ payload } : any) => {
    return(
      <ul className={style.legendBarChart}>
        <li>
          <span>Activité quotidienne</span>
        </li>
        {
          payload.map((item, index) => (
            item.value === 'kilogram' ? 
              <li key={index}>
                <i className={style.colorBlack}></i> Poids (kg)
              </li> :
              <li key={index}>
                <i className={style.colorPrimary}></i>Calories brûlées (kCal)
              </li>
              
          ))
        }
      </ul>
    )
  }
    
    return (
      <div className={style.barChartBoardContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={newData}
            margin={{
              top: 50,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis dataKey="day" fill='#DEDEDE' tickMargin={20}/>
            <YAxis yAxisId="right" orientation="right" stroke="#74798C" axisLine={false} tickLine={false} tickMargin={10}/>
            <YAxis yAxisId="left" orientation="left" tick={<></>} axisLine={false} tickLine={false}/>
            <Tooltip content={<CustomTooltip />}/>
            <Legend width={200} content={<CustomLegend />} wrapperStyle={{top: 0, lineHeight: "20px", width: "100%"}}/>
            <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" maxBarSize={10} radius={[20, 20, 0, 0]} />
            <Bar yAxisId="left" dataKey="calories" fill="#E60000" maxBarSize={10} radius={[20, 20, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}


