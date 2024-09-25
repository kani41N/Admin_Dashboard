import React, { useState } from 'react';
import CardFilter from './CardFilter';
import ReportCharts from './ReportCharts';

function Reports() {
    const[filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    };

  return (
    <div className='card mt-3'>
        <CardFilter onClick={handleFilterChange}/>
      <div className='card-body'>
        <h5 className='card-title'>
            Report | <span className='fs-6 text-primary'>{filter}</span>
        </h5>
      </div>
      <ReportCharts />
    </div>
  )
}

export default Reports;
