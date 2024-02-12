import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: '9월', uv: 40000 },
  { name: '10월', uv: 30000 },
  { name: '11월', uv: 20000 },
  { name: '12월', uv: 90000 },
  { name: '1월', uv: 95000 },
  { name: '2월', uv: 100000 },
 ];

const TinyBarChart = () => {
  return (
    <div style={{ width: '70vw', height: '50vh' }}>
      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" name="소비내역" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyBarChart;
