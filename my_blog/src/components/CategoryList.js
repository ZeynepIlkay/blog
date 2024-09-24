import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

function CategoryList({ posts }) {
  const { name } = useParams();
  const [expandedPostId, setExpandedPostId] = useState(null);

  const filteredPosts = posts.filter(post => {
    if (name === 'Denizce') {
      return post.content.toLowerCase().includes('deniz');
    } else if (name === 'Karasal') {
      return !post.content.toLowerCase().includes('deniz');
    } else {
      return true; // For 'Kararsizlar', show all posts
    }
  });

  if (filteredPosts.length === 0) {
    return <div>No posts found for this category</div>;
  }

  const toggleReadMore = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <div className="category-list row">
      {filteredPosts.map(post => (
        <MDBCard className='mb-3 custom-card' key={post.id}>
          <MDBCardImage position='top' src={post.image || '/images/Ayasofya-trabzon.jpg'} alt={post.title} className='custom-image' />
          <MDBCardBody>
            <MDBCardTitle className='custom-title'>{post.title}</MDBCardTitle>
            <MDBCardText>
              {expandedPostId === post.id ? post.content : `${post.content.substring(0, 150)}...`}
              <a href="#!" onClick={() => toggleReadMore(post.id)} className='read-mores'>
                {expandedPostId === post.id ? ' daha az göster' : ' devamını oku'}
              </a>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>{post.author}</small>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>{post.date}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}

export default CategoryList;
