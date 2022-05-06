// Dependencies
import React from 'react'

// Styles
import { Container } from '../../styles/pages/learn-how.styles'

const LearnHow: React.FC = () => {
  return (
    <Container>
      <div className="background">
        <div className="video">
          <h1>Reach More Customers</h1>
          <button>
            <p>LEARN NOW</p>
          </button>
        </div>
        <div className="content">

          <div className="first-card">
            <span />
            <p>Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</p>
            <button>
              <p>
                Learn More {'>'}
              </p>
            </button>
          </div>
          <div className="second-card">
            <span />
            <p>Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.</p>
            <button>
              <p>
                Learn More {'>'}
              </p>
            </button>
          </div>
          <div className="text">
            <h1>
              The source for proven, engaging email campaigns
            </h1>
            <p>
              Whether you’re a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business.
            </p>
          </div>
        </div>
      </div>

    </Container>
  );
}

export default LearnHow;
