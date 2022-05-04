import React from 'react';
import Mail from '../../assets/mail.svg'
import { Container } from '../../styles/pages/navbar.style';
// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Mail/>
      <p>NinjaMail</p>
    </Container>
  )
}

export default Navbar;
