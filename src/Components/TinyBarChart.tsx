import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';
import { Money } from '../Components/types';

const TinyBarChart: React.FC<{ moneys: Money[] }> = ({ moneys }) => {
  const [monthlyData, setMonthlyData] = useState<{ name: string; uv: number }[]>([]);

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const pastMonthsMoneys: Money[] = [];

    for (let i = 0; i < 5; i++) {
      const monthOffset = i + 1;  // 1부터 시작
      const filteredData = moneys.filter((money) => {
        const moneyMonth = new Date(money.date).getMonth() + 1;
        return (
          moneyMonth >= currentMonth - monthOffset ||
          (moneyMonth <= currentMonth && moneyMonth >= 12 - (5 - (currentMonth - monthOffset)))
        );
      });
      pastMonthsMoneys.push(...filteredData);
    }

    // 월별로 데이터 구성
    const monthlyChartData = Array.from({ length: 6 }, (_, index) => {
      const targetMonth = currentMonth - index;
      const filteredData = pastMonthsMoneys.filter((money) => new Date(money.date).getMonth() + 1 === targetMonth);
      const totalAmount = filteredData.reduce((sum, money) => sum + Number(money.amount), 0);
      return {
        name: new Date(new Date().getFullYear(), targetMonth - 1, 1).toLocaleDateString('ko-KR', { month: 'long' }),
        uv: totalAmount,
      };
    }).reverse();

    setMonthlyData(monthlyChartData);
  }, [moneys]);

  return (
    <div style={{ width: '70vw', height: '50vh' }}>
      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={monthlyData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" name="transaction history" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyBarChart;
