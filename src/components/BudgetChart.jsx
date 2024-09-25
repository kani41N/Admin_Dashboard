import React, {useEffect} from 'react';
import * as echarts from 'echarts';

function BudgetChart() {
  
 useEffect(() => {
    echarts.init(document.querySelector('#budgetChart')).setOption({
      legend: {
        data: ['Allocated Budget', 'Actual Spending'],
      },
      radar: {
        shape: 'circle',
        indicator: [
          {
            name: 'Sales',
            max: 6500,
          },
          {
            name: 'Administration',
            max: 16000,
          },
          {
            name: 'Information Technology',
            max: 30000,
          },
          {
            name: 'Customer Support',
            max: 30000,
          },
          {
            name: 'Development',
            max: 50000,
          },
          {
           name: 'Marketing',
           max: 56000,
          },
        ]
      }, 
      series: [
        {
          name: 'Budget vs pending',
          type: 'radar',
          data: [
            {
              value: [1000,4200,20000,35000,50000,18000],
              name: 'Allocated Budget',
            },
            {
              value: [1200,4300,12000,3000,20000,21000],
               name: 'Actual Spending',
            }
          ]
        }
      ]
    })
 }, []);

  return (
    <div id='budgetChart' style={{height:'400px'}} className='echart'>
       
    </div>
  )
}

export default BudgetChart;