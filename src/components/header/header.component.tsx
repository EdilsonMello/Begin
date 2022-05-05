import React from 'react'
import { Container } from '../../styles/pages/header.styles'

const Header: React.FC = () => {
  return (
    <Container>
      <div className='content'>
        <div className="text">
          <h1>
            Create Stunning Email Campaigns
          </h1>
          <p>
            Create and launch email campaigns that captivate
            your customers in just a few clicks.
          </p>
          <div className="buttons">
            <button>
              <span>TRY NOW</span>
            </button>
            <button className="demo">
              <span>GET A DEMO</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header;
