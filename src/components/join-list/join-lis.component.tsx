import React from 'react';
import { Container } from '../../styles/pages/join-list.styles';

const JoinList: React.FC = () => {
  return (
    <Container>
      <div className="cards">
        <div className="frankie">
          <h1>Frankie</h1>
          <p>Member since 2016</p>
        </div>
        <div className="camile">
          <h1>Camile</h1>
          <p>Member since 2012</p>
        </div>
        <div className="elayne">
          <h1>Elayne</h1>
          <p>Member since 2018</p>
        </div>
      </div>
      <h1>Learn how others are reaching their audience easier than ever before.</h1>
      <div className="join">
        <div className="acess">
          <input type="text" placeholder="Enter your email" />
        </div>
          <button>
            <p>JOIN OUR LIST</p>
          </button>
      </div>
    </Container>
  );
}

export default JoinList;
