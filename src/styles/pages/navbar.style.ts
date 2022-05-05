import styled from 'styled-components'

export const Container = styled.div `
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
padding: 0 5px;

@media (min-width: 768px) {
  padding: 15px 20px 0 20px;
}


@media (min-width: 1440px) {
  padding: 28px 100px 0 100px;
}

svg {
  width: 100px;

  @media (min-width: 768px) {
    width: 190px;
  }
}

p {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 26px;

  @media (min-width: 1440px ) {
    font-size: 35px;
    line-height: 41px;
    margin-left: 10px;
  }
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.links {
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 10px;
    display: flex;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 7px;

    @media (min-width: 1440px) {
      margin-right: 15px;
    }
  }
}

a {
  color: #000;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  text-decoration: none;
  font-size: 11px;
  line-height: 13px;

  @media (min-width: 1440px) {
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 1.275px;
  }
}

span {
  display: flex;
  margin: 6px 0px 0 0;
  width: 71px;
  height: 3px;
  background: ${props => props.theme.colors.backgoundGreen};

  @media (min-width: 1440px) {
    width: 110px;
    height: 5px;
  }
}

button {
  background: ${props => props.theme.colors.backgoundGreen};
  display: flex;
  border: none;
  width: 110px;
  height: 25px;
  align-items: center;
  margin-left: 30px;

  @media (min-width: 1440px) {
    margin-left: 17px;
    width: 168px;
    height: 41px;
  }

  > p {
    width: 128px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    text-align: center;
    color: #FFFFFF;
    font-size: 11px;
    line-height: 13px;

    @media (min-width: 1440px) {
      font-size: 17px;
      line-height: 20px;
      margin: 11px 20px 10px 20px;
    }
  }
}
`
