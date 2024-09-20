import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({ posts }) {
  return (
    <Carousel>
      {posts.map(post => (
        <Carousel.Item key={post.id}>
          <img
            className="d-block w-100"
            src={post.image || '/images/Ayasofya-trabzon.jpg'}
            alt={post.title}
          />
          <Carousel.Caption>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="text-sm text-gray-600">Yazar: {post.author}</p>
            <p className="text-sm text-gray-600">Tarih: {post.date}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
