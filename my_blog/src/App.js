import React, { useEffect, useState } from 'react';
import NavScrollExample from './components/NavScroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import UncontrolledExample from './components/UncontrolledExample';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import CategoryList from './components/CategoryList';
import PersonalProfile from './components/Profiles'; 
import Home from './components/HomePage';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Arama terimine göre filtreleme
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <NavScrollExample searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <div className="container mx-auto p-4">
        
        <Routes>
          <Route path="/" element={<Home posts={filteredPosts} />}  />
          <Route path="/post/:id" element={<PostDetail posts={posts} />} />
          <Route path="/category/:name" element={<CategoryList posts={filteredPosts} />} />
          <Route path="/profile" element={<PersonalProfile />} />
        </Routes>
        
       
      </div>
      <Footer />
    </Router>
  );
}

export default App;
