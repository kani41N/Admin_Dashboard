import React from 'react';

function TopSellingItems({ item }) {
  return (
    <tr>
      <th scope="row">
        <a href="#">
          <img src={item.image} alt='images' />
        </a>
      </th>
      <td>
        <a href="#" className="text-primary fw-bold">
          {item.name}
        </a>
      </td>
      <td>{item.price.toFixed(2)}</td>
      <td>{item.unitsSold}</td>
      <td>${(item.price * item.unitsSold).toLocaleString('en-IN')}</td>
    </tr>
  );
}

export default TopSellingItems;
