import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image || '/images/Ayasofya-trabzon.jpg'} alt={post.title} className='detailimg'/>
      <p>{post.content}</p>
      <div className="author">{post.author}</div>
      <div className="date">{post.date}</div>
    </div>
  );
}

export default PostDetail;
