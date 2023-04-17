import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

export function WeatherPopupBarChart({ data }) {
  return (
    <BarChart
      width={ 380 }
      height={ 330 }
      data={ data }
      margin={ { top: 50, right: 0, left: 0, bottom: 0 } }
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="lastYear" label="Last Year" fill="#65cef7" />
      <Bar dataKey="thisYear" label="This Year" fill="#1b6dff" />
    </BarChart>
  );
}
