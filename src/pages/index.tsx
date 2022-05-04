// Dependencies
import React from 'react'


import Head from 'next/head'
import { Container } from '../styles/pages/home.style';

// import Photo from  '../assets/photo.svg'

const Home: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Homepage</title>
      </Head>
        {/* <Photo/> */}
    </Container>
  );
}

export default Home
