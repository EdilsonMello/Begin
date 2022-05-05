import styled from 'styled-components'

export const Container = styled.div `
display: flex;
width: 100%;
align-items: center;
justify-content: center !important;
flex-direction: column;

.baner {
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 100%;
  background: ${props => props.theme.colors.backgoundGreen};
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 240px;
  }

  @media (min-width: 1440px) {
    height: 366px;
  }

  > h1 {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    text-align: center;
    color: #FFFFFF;
    font-size: 42px;
    line-height: 48px;
    width: 320px;
    margin-bottom: 50px;

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1440px) {
      font-size: 60px;
      width: 100%;
      line-height: 80px;
    }
  }

  > button {
    background: #fff;
    border: none;
    width: 131px;
    height: 42px;

    @media (min-width: 1440px) {
      width: 200px;
      height: 65px;
    }

    > p {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 900;
      text-align: center;
      color: ${props => props.theme.colors.backgoundGreen};
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
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: initial;
  width: 100%;
  flex-direction: column;
  padding: 30px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 50px 81px 36px 80px;
  }

  @media (min-width: 1440px) {
    padding: 80px 222px 56px 220px;
  }

  .logo {
    display: flex;
    width: 200px;

    @media (min-width: 1440px) {
      margin-right: 200px;
    }
    > p {
      margin-top: 15px;
      width: 80px;
      height: 31px;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 900;
      color: #000000;
      font-size: 16px;
      line-height: 19px;

      @media (min-width: 1440px) {
        font-size: 26px;
        line-height: 31px;
      }
    }
  }

  .options {
    display: flex;
    flex-direction: row;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    @media (min-width: 1440px) {
      width: 563px;
    }

    .first {
      display: flex;
      flex-direction: column;

      @media(min-width: 768px) {
        flex-direction: row;
      }
    }

    .second {
      display: flex;
      flex-direction: column;

      @media(min-width: 768px) {
        flex-direction: row;
      }
    }

    .sections {
      display: flex;
      flex-direction: column;

      > p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        color: #000000;
        font-size: 12px;
        line-height: 14px;
        margin-left: 40px;

        @media (min-width: 1440px) {
          margin-top: 10px;
          font-size: 19px;
          line-height: 22px;
          margin-left: 50px;
        }
      }
    }
  }
}

span {
  width: 90%;
  height: 2px;
  background: #DBDBDB;

  @media (min-width: 1440px) {
    width: 80%;
  }
}

.terms {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 20px 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 20px 50px;
  }

  h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    color: #000000;
    font-size: 9px;
    line-height: 19px;
    width: 186px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      width: 100%;
      margin-bottom: 0;
    }

    @media (min-width: 1440px) {
      width: 100%;
      font-size: 15px;
      line-height: 18px;
      margin-right: 100px;
      margin-bottom: 0;
    }

  }

  p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    color: #000000;
    font-size: 9px;
    line-height: 19px;

    @media (min-width: 768px) {
      width: 200px;
      text-align: end;
    }

    @media (min-width: 1440px) {
      font-size: 15px;
      line-height: 18px;
      width: 300px;;
    }
  }
}
`
