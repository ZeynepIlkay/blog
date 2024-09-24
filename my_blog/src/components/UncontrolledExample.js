import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({ posts, searchTerm }) {
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : content;
  };

  // Arama işlemi için filtreleme fonksiyonu
  const filteredPosts = posts.filter(post => {
    const lowerCaseSearchTerm = searchTerm?.toLowerCase() || '';
    
    // Tüm alanların dolu olup olmadığını kontrol ediyoruz
    const title = post.title?.toLowerCase() || '';
    const content = post.content?.toLowerCase() || '';
    const author = post.author?.toLowerCase() || '';

    return (
      title.includes(lowerCaseSearchTerm) ||
      content.includes(lowerCaseSearchTerm) ||
      author.includes(lowerCaseSearchTerm)
    );
  });

  return (
    <Carousel>
      {filteredPosts.map(post => (
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
