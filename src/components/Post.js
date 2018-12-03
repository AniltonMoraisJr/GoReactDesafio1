import React from 'react';
import PropTypes from 'prop-types';
/* Component */
import PostHead from './PostHead';

// eslint-disable-next-line react/prop-types
const Post = ({ data }) => (
  <div className="container">
    {data.map((post, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="card" key={index}>
        <PostHead name={post.name} time={post.time} img={post.img} />
        <hr />
        <p className="card-content">{post.content}</p>
      </div>
    ))}
  </div>
);

Post.defaultProps = {
  posts: [],
};

Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array,
};

export default Post;
