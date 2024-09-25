import React, {useState} from 'react';
import './recentSales.css';
import CardFilter from './CardFilter';
import RecentSalesTable from './RecentSalesTable';
import { useEffect } from 'react';

function RecentSales() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');

  const handleFilterChange = filter => {
    setFilter(filter);
  }

  const fetchData = () => {
    fetch('http://localhost:4000/recentSales')
    .then(res => res.json())
    .then(data => {
      setItems(data);
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='card recent-sales overflow-auto mt-3'>
      <CardFilter filterChange={handleFilterChange}/>

      <div className='card-body'>
        <h5 className=''>
          Recent Sales <span>| {filter}</span>

        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  )
}

export default RecentSales;