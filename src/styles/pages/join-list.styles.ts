import styled from 'styled-components'

export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
position: relative;
top: -3em;

@media (min-width: 768px) {
  top: -4em;
  position: relative;
}

@media (min-width: 1440px) {
  top: -8em;
  position: relative;
}

.cards {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
    color: #fff;
    margin: 0 0 0 20px;

    @media (min-width: 1440px) {
      margin: 0 0 0 30px;
      font-size: 34px;
      line-height: 40px;
    }
  }

  p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    margin: 5px 0 15px 20px;

    @media (min-width: 1440px) {
      font-size: 19px;
      line-height: 22px;
      margin: 5px 0 25px 25px;
    }
  }

  .frankie {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 223px;
    height: 157px;
    background-image: url('frankie-mobile.svg');
    background-repeat: no-repeat;
    margin-bottom: 20px;

    @media (min-width: 1440px) {
      width: 342px;
      height: 239px;
      background-image: url('frankie.svg');
      background-repeat: no-repeat;
    }
  }

  .camile {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 223px;
    height: 157px;
    background-image: url('camile-mobile.svg');
    background-repeat: no-repeat;
    margin: 0 0 20px 0;

    @media (min-width: 768px) {
      margin: 0 20px 20px 20px;
    }

    @media (min-width: 1440px) {
      width: 342px;
      height: 239px;
      background-image: url('camile.svg');
      background-repeat: no-repeat;
    }
  }

  .elayne {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 223px;
    height: 157px;
    background-image: url('elaine-mobile.svg');
    background-repeat: no-repeat;
    margin-bottom: 20px;

    @media (min-width: 1440px) {
      width: 342px;
      height: 239px;
      background-image: url('elaine.svg');
      background-repeat: no-repeat;
    }
  }
}

> h1 {
  font-size: 28px;
  line-height: 36px;
  margin-top: 40px;
  width: 226px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
    margin-top: 20px;
    width: 531px;
  }

  @media (min-width: 1440px) {
    width: 847px;
    font-size: 44px;
    line-height: 48px;
  }
}

.join {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    margin-top: 30px;
  }

  .acess {
    display: flex;
    flex-direction: column;

    input {
      width: 223px;
      height: 42px;
      background: #FFFFFF;
      border: 1px solid #9F9F9F;
      border-radius: 5px;
      text-indent: 10px;
      margin-top: 10px;

      ::placeholder {
        color: #000;
      }

      @media (min-width: 1440px) {
        width: 420px;
        height: 65px;

          ::placeholder {
          color: #000;
          font-size: 21px;
        }
      }
    }
  }

  button {
    width: 144px;
    height: 42px;
    background: ${props => props.theme.colors.backgoundGreen};
    border: none;
    margin-top: 10px;

    @media (min-width: 768px) {
      margin-left: 20px;
    }

    @media (min-width: 1440px) {
      width: 221px;
      height: 65px;
      margin-left: 30px;
    }

    p {
      font-weight: 900;
      font-size: 13px;
      line-height: 15px;
      text-align: center;
      letter-spacing: 0.65px;
      color: #FFFFFF;

      @media (min-width: 1440px) {
        font-size: 21px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 1.05px;
      }
    }
  }
}


`
