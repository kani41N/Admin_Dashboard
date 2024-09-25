import { useState } from 'react';
import React from 'react';
import CardFilter from './CardFilter'; 
import './card.css';

function Card({ card }) {
  const [filter, setFilter] = useState('Today');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className='col-xxl-3 col-md-4'>
      <div className='card'>
        <div className='info-card sales-card'>
          <CardFilter filterChange={handleFilterChange} />
        </div>

        <div className='card-body'>
          <h5 className='card-title'>
            {card.name} <span>| {filter}</span>
          </h5>
        </div>

        <div className='d-flex align-items-center'>
          <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
            {/* Render Remixicon using the icon class from card.icon */}
            <i className={card.icon}></i>
          </div>
          <div className='ps-3'>
          <h6>
            {card.name === 'Revenue'
              ? '$' + card.amount.toLocaleString('en-IN')
              : card.amount.toLocaleString('en-IN')}
          </h6>
          <span
            className={`${card.percentage > 0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`}
          >
            {card.percentage > 0 ? card.percentage * 100 : -card.percentage * 100}%
          </span>
          <span className='text-muted small pt-1 ps-1'>
            {card.percentage > 0 ? 'increase' : 'decrease'}
          </span>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default Card;
