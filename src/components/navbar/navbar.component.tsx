// Dependencies
import React from 'react'
import Link from 'next/link'

// Assets
import Mail from '../../assets/mail.svg'

// Styles
import { Container } from '../../styles/pages/navbar.style'

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <Mail/>
        <p>NinjaMail</p>
        <div className="links">
          <div>
            <Link href='#features'>
              <a>FEATURES</a>
            </Link>
            <span/>
          </div>
          <div>
            <Link href='#pricing'>
              <a>PRICING</a>
            </Link>
            <span/>
          </div>
          <div>
            <Link href='#services'>
              <a>SERVICES</a>
            </Link>
            <span/>
          </div>
          <div>
            <Link href='#partners'>
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
