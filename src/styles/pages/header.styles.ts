import styled from 'styled-components'

export const Container = styled.div `
display: flex;
justify-content: center;
height: 450px;
width: 100%;

@media (min-width: 768px) {
  background-image: url('background-tablet.svg');
  background-repeat: no-repeat;
  height: 350px;
  margin-top: 20px;
}

@media (min-width: 1440px) {
  align-items: center;
  background-image: url('background.svg');
  background-repeat: repeat-y;
  height: 582px;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 383px;
  background-position: center;
  flex-direction: column;
  background-image: url('mobile-first.svg');
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-position: right;
    margin: 0px 20px 40px 40px;
  }

  @media (min-width: 1440px) {
    background-image: url('banner.svg');
    margin: 20px 160px 0 0;

  }
}

.text {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 15px 0 0 12px;

  @media (min-width: 768px) {
    margin: 80px 0 0 0px;
    padding: 0;
  }

  @media (min-width: 1440px) {
    margin: 0 0 0 130px;
  }
}

h1 {
  font-family: 'Playfair';
  font-style: normal;
  font-weight: 900;
  width: 254px;
  font-size: 36px;
  line-height: 46px;
  margin-bottom: 140px;

  @media (min-width: 768px) {
    width: 284px;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    font-size: 59px;
    line-height: 71px;
    width: 459px;
    height: 142px;
  }
}

p {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  width: 290px;
  height: 32px;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 15px;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 10px;
  }

  @media (min-width: 1440px) {
    width: 406px;
    height: 52px;
    font-size: 19px;
    line-height: 26px;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 290px;

  @media(min-width: 1440px) {
    width: 445px;
    height: 65px;
    margin-top: 35px;
  }

  button {
    display: flex;
    background: ${props => props.theme.colors.backgoundGreen};
    border: none;
    align-items: center;
    justify-content: center;
    width: 131px;
    height: 42px;

    @media (min-width: 1440px) {
      height: 65px;
      width: 200px;
    }
  }

  .demo {
    background: #fff;
    border: solid 3px ${props => props.theme.colors.backgoundGreen};

    > span {
      color: ${props => props.theme.colors.backgoundGreen};
    }
  }

  span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 900;
    text-align: center;
    color: #fff;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.65px;

    @media (min-width: 1440px) {
      letter-spacing: 1.05px;
      font-size: 21px;
      line-height: 25px;
    }
  }
}
`
