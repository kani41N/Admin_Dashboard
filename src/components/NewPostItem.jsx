import React from 'react';

function NewPostItem({ item }) {
  return (
    <div className='news-item'>
      <img src={item.image} alt='' />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </div>
  );
}

export default NewPostItem;
