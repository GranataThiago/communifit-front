'use client'
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Week 1',
      kg: 95,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Week 2',
      kg: 94.7,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Week 3',
      kg: 94.3,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Week 4',
      kg: 94,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Week 5',
      kg: 93,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Week 6',
      kg: 92,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Weight',
      kg: 90,
      pv: 4300,
      amt: 2100,
    },
  ];

const ProgressChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="kg" stroke="#5D5FEF" fill="#5D5FEF" />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default ProgressChart