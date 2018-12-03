import React from 'react';

// eslint-disable-next-line react/prop-types
const PostHead = ({ img, name, time }) => (
  <div className="card-header">
    <img src={img} alt="Avatar" />
    <div>
      <h1>{name}</h1>
      <span>{time}</span>
    </div>
  </div>
);

export default PostHead;
