import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({ posts }) {
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : content;
  };

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
            <p>
              {truncateContent(post.content, 6)}{' '}
              <a href={`/post/${post.id}`} className='read-more'>devamını oku</a>
            </p>
            <div className="author">{post.author}</div>
            <div className="date">{post.date}</div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
