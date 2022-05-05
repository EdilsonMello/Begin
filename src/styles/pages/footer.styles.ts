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
  height: 366px;
  width: 100%;
  background: ${props => props.theme.colors.backgoundGreen};
  justify-content: center;
  align-items: center;

  > h1 {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 80px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 50px;
  }

  > button {
    width: 200px;
    height: 65px;
    background: #fff;
    border: none;

    > p {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 900;
      font-size: 21px;
      line-height: 25px;
      text-align: center;
      letter-spacing: 1.05px;
      color: ${props => props.theme.colors.backgoundGreen};
    }
  }
}

.content {
  display: flex;
  justify-content: center;
  padding: 80px 222px 56px 220px;

  .logo {
    display: flex;
    width: 220px;
    margin-right: 200px;
    > p {
      margin-top: 15px;
      width: 121px;
      height: 31px;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 900;
      font-size: 26px;
      line-height: 31px;
      color: #000000;
    }
  }

  .options {
    display: flex;
    width: 563px;
    flex-direction: row;
    justify-content: space-between;

    .sections {
      display: flex;
      flex-direction: column;

      > p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        line-height: 22px;
        color: #000000;
        margin-top: 10px;
      }
    }
  }
}

span {
  width: 80%;
  height: 2px;
  background: #DBDBDB;
}

.terms {
  display: flex;
  margin: 39px 0;

  h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    margin-right: 100px;
  }

  p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    margin-right: 35px;
  }
}
`
