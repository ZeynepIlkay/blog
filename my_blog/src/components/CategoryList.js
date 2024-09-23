import React from 'react';
import { useParams } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

function CategoryList({ posts }) {
  const { name } = useParams();
  const filteredPosts = posts.filter(post => post.category === name);

  if (filteredPosts.length === 0) {
    return <div>No posts found for this category</div>;
  }

  return (
    <div className="row">
      {filteredPosts.map(post => (
        <MDBCard className='mb-3' key={post.id}>
          <MDBCardImage position='top' src={post.image || '/images/Ayasofya-trabzon.jpg'} alt={post.title} />
          <MDBCardBody>
            <MDBCardTitle>{post.title}</MDBCardTitle>
            <MDBCardText>
              {post.content.substring(0, 100)}...{' '}
              <a href={`/post/${post.id}`} className='read-more'>devamını oku</a>
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
