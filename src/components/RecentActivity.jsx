import React, { useEffect, useState } from 'react';
import CardFilter from './CardFilter';
import RecentActivityItems from './RecentActivityItems';

function RecentActivity() {
    const[items, setItems] = useState([]);
    const[filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/recentActivity')
        .then(res => res.json())
        .then(data => {
            setItems(data);
        })
    }

    useEffect(()=> {
        fetchData();
    }, []);
    
  return (
    <div className='card'>
        <CardFilter filterchange={handleFilterChange} />

     <div className='card-body'>
       <h5 className='title'>
         Recent Activity | <span>{filter}</span>
       </h5>
       <div className='activity'>
        {
            items && 
            items.length > 0 &&
            items.map(item => {
                <RecentActivityItems key={item.id} item={item} />
            })
        }
         
       </div>
     </div>
    </div>
  )
}

export default RecentActivity;