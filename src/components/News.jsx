import React, { useEffect, useState } from 'react';
import CardFilter from './CardFilter';
import NewPostItem from './NewPostItem';

function News() {
    const[items, setItems] = useState([]);
    const[filter, setFilter] = useState('Today');

    const handleFilterChange = (filter) => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/news')
        .then(res => res.json())
        .then(data => {
            setItems(data);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='card mt-3'>
      <CardFilter filterChange={handleFilterChange} />
      <div className='card-body pb-0'>
        <h5>News | <span>{filter}</span></h5>
        <div className='news'>
          {
            items && items.length > 0 && 
            items.map(item => <NewPostItem key={item._id} item={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default News;