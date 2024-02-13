import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const PieChartcomponent =() => {
  const data = [
    { name: 'Food Expenses', value: 250 }, //식비
    { name: 'Housing', value: 200 }, //주거비
    { name: 'Clothing and Accessories', value: 150 },//의류 및 액세서리
    { name: 'Transportation', value: 100 },//교통,통신비
    { name: 'Household Goods', value: 50 },//생활용품
    { name: 'Medical Expenses', value: 10 },//의료비
    { name: 'Education', value: 50 }, //교육비
    { name: 'Entertainment', value: 10 }, //문화 및 여가
    { name: 'Others', value: 100 }, //기타
  ];
  const sortedData = data.slice().sort((a, b) => b.value - a.value);

// 상위 6개 항목 추출
  const topItems = sortedData.slice(0, 6);

// 나머지 항목들을 합쳐 "기타" 항목으로 생성
  const otherItems = sortedData.slice(6);
  const sumOfOtherItems = otherItems.reduce((sum, item) => sum + item.value, 0);
  const otherCategory = { name: 'Miscellaneous Items', value: sumOfOtherItems };
 
  const finalData = [...topItems, otherCategory];
   interface Props{ //빨간줄 props 설정해서 해결
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
     
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#A97C50',   '#AF7AC5', '#BFBFBF'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }:Props) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
    return (
      <div>
       
      <ResponsiveContainer  width="100%" height={470}   >
        <PieChart >
        <Legend  wrapperStyle={{ bottom:0, left: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '25px' }} />

          <Pie
            data={finalData}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {finalData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
    );
  
}
export default PieChartcomponent;