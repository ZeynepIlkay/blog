import React from 'react';
import UncontrolledExample from './UncontrolledExample'; // Slider bileşeni
import { MDBContainer } from 'mdb-react-ui-kit';

function Home({ posts }) {
  return (
    <MDBContainer>
      <h1 className="text-3xl font-bold mb-4">Gezmek denince...</h1>
      <UncontrolledExample posts={posts} />
      <div>
        <h5 className="blinking-text margin-top-3"> 
          Ana sayfada kayarken aradığınız günceyi bulabilir ya da kategorilerden aradığınız gezinin yazılarına ulaşabilirsiniz! Keşfetmeye gezgin ruhuyla başlayın! <span style={{ fontSize: '30px' }}>&#129395;</span>
        </h5>
      </div>
    </MDBContainer>
  );
}

export default Home;
