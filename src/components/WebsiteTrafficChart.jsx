import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function WebsiteTrafficChart() {
  useEffect(() => {
    // Initialize the chart
    const chart = echarts.init(document.querySelector('#trafficChart'));
    // Set chart options
    chart.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 500, name: 'Email' },
            { value: 404, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    });

    // Cleanup chart instance on component unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="trafficChart"
      style={{ height: '400px', width: '100%' }} // Correct height setting
      className="echart"
    ></div>
  );
}

export default WebsiteTrafficChart;
