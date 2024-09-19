import React, { useEffect, useState } from 'react';

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
      <h1 className="text-3xl font-bold mb-4">Blog Yazıları</h1>
      {posts.map(post => (
        <div key={post.id} className="post border p-4 mb-4">
          <div className="post-title text-2xl font-semibold">{post.title}</div>
          <div className="post-content my-2">{post.content}</div>
          <div className="post-author text-sm text-gray-600">Yazar: {post.author}</div>
          <div className="post-date text-sm text-gray-600">Tarih: {post.date}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
