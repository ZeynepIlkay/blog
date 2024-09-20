import React, { useEffect, useState } from 'react';
import NavScrollExample from './components/NavScroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import UncontrolledExample from './components/UncontrolledExample';
import './App.css';

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
      <h1 className="text-3xl font-bold mb-4">Gezmek denince...</h1>
      <UncontrolledExample posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
