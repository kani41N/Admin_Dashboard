import React from 'react';

function RecentSalesTable({ items }) {
  const handleStatus = (status) => {
    switch (status) {
      case 'Approved':
        return 'success';
        break;
      case 'Pending':
        return 'warning';
        break;
      case 'Rejected':
        return 'danger';
        break;
      default:
        return 'success';
    }
  };

  return (
    <div>
      <table className='table table-borderless datatable'>
        <thead className='table-light'>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item._id}>
                <th scope='row'> 
                  <a style={{ textDecoration: 'none' }} href=''>{item.id}</a>
                </th> 
                <td>{item.customerName}</td>
                <td>
                  <a className='text-primary' style={{ textDecoration: 'none' }} href='#'>
                    {item.productName}
                  </a>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <span className={`badge bg-${handleStatus(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5'>No sales data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentSalesTable;
