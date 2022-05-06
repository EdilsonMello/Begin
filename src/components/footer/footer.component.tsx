import React from 'react'
import { Container } from '../../styles/pages/footer.styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="baner">
        <h1>Get started today!</h1>
        <button>
          <p>PICK A PLAN</p>
        </button>
      </div>
      <div className="content">
        <div className="logo">
          <span/>
          <p>NinjaMail</p>
        </div>
        <div className="options">
          <div className="first">
            <div className="sections">
              <p>Features</p>
              <p>Pricing</p>
              <p>Services</p>
              <p>Partners</p>
            </div>
            <div className="sections">
              <p>About Us</p>
              <p>Tutorials</p>
              <p>Resources</p>
              <p>Help Center</p>
              <p>Templates</p>
              <p>Case Studies</p>
            </div>
          </div>
          <div className="second">
              <div className="sections">
                <p>Medium</p>
                <p>Twitter</p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
              </div>
              <div className="sections">
                <p>Contact Us</p>
                <p>Slack</p>
                <p>Jobs</p>
              </div>
            </div>
          </div>
      </div>
      <span/>
      <div className="terms">
        <h1>NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.</h1>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </Container>
  );
}

export default Footer;
