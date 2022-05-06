import React from 'react';
import { Container } from '../../styles/pages/brand.styles';

const Brand: React.FC = () => {
  return (
    <Container>
      <h1>All the best brands already use us.</h1>
      <div className="brands">
        <div className="first">
          <span className="brand1"/>
          <span className="brand2"/>
        </div>
        <div className="second">
          <span className="brand3"/>
          <span className="brand4"/>
        </div>
        <span className="brand5"/>
      </div>
    </Container>
  );
}

export default Brand;
