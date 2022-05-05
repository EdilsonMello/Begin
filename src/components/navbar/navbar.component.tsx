import React from 'react'
import Mail from '../../assets/mail.svg'
import { Container } from '../../styles/pages/navbar.style'
import Link from 'next/link'
// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <Mail/>
        <p>NinjaMail</p>
        <div className="links">
          <div>
            <Link href=''>
              <a>FEATURES</a>
            </Link>
            <span/>
          </div>
          <div>
            <Link href=''>
              <a>PRICING</a>
            </Link>
            <span/>
          </div>
          <div>
            <Link href=''>
              <a>SERVICES</a>
            </Link>
            <span/>
          </div>
          <div>
            <Link href=''>
              <a>PARTNERS</a>
            </Link>
            <span/>
          </div>
        </div>
        <button>
          <p>SIGN UP FREE</p>
        </button>
      </div>

    </Container>
  )
}

export default Navbar;
