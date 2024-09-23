import React, { useEffect, useState } from 'react';
import NavScrollExample from './components/NavScroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import UncontrolledExample from './components/UncontrolledExample';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import CategoryList from './components/CategoryList';
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
    <Router>
      <div className="container mx-auto p-4">
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<UncontrolledExample posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail posts={posts} />} />
          <Route path="/category/:name" element={<CategoryList posts={posts} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
