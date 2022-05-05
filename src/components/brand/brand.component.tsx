import React from 'react';
import { Container } from '../../styles/pages/brand.styles';
import Brand1 from '../../assets/brand1.svg'
import Brand2 from '../../assets/brand2.svg'
import Brand3 from '../../assets/brand3.svg'
import Brand4 from '../../assets/brand4.svg'
import Brand5 from '../../assets/brand5.svg'

const Brand: React.FC = () => {
  return (
    <Container>
      <h1>All the best brands already use us.</h1>
      {/* <div className="brands">
        <Brand1/>
        <Brand2/>
        <Brand3/>
        <Brand4/>
        <Brand5/>
      </div> */}
    </Container>
  );
}

export default Brand;
