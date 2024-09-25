import React, { useEffect, useState } from 'react';
import './topSelling.css';
import TopSellingItems from './TopSellingItems';
import CardFilter from './CardFilter';

function TopSelling() {
    const[items, setItems] = useState([]);
    const[filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    }

    const fetchData = () => {
       fetch ('http://localhost:4000/topSelling')
       .then(res => res.json())
       .then(data => {
        setItems(data);
       })
    }

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className='card top-selling overflow-auto mt-3'>
      <CardFilter filterChange={handleFilterChange}/>

      <div className='card-body px-3'>
        <h5>Top Selling | <span>{filter}</span></h5>
      </div>

    <table className='table table-borderless '>
     <thead className='table-light'>
      <tr>
        <th>Preview</th>
        <th>Product</th>
        <th>Price</th>
        <th>Sold</th>
        <th>Revenue</th>
      </tr>
     </thead>
     <tbody>
        {items && items.length > 0 &&
           items.map((item) => (
             <TopSellingItems key={item._id} item={item} />
         ))}
     </tbody>
    </table>
    </div>
  )
}

export default TopSelling;
 