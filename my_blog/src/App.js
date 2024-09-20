import React, { useEffect, useState } from 'react';
import NavScrollExample from './components/NavScroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/blog.json', true);
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        setPosts(data);
      } else {
        console.error('Error loading JSON:', xhr.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('Network Error');
    };
    xhr.send();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <NavScrollExample />
      <h1 className="text-3xl font-bold mb-4">Blog Yazıları</h1>
      <Carousel>
        {posts.map(post => (
          <Carousel.Item key={post.id}>
            <img
              className="d-block w-100"
              src={post.image || 'path/to/placeholder-image.jpg'}
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
      <Footer />
    </div>
  );
}

export default App;
