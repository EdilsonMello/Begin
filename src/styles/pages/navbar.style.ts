import styled from 'styled-components'

export const Container = styled.div `
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
padding: 28px 100px 0 100px;

svg {
  width: 150px;
}

p {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 41px;
  margin-left: 10px;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;
  margin-top: 10px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
  }
}

a {
  color: #000;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 1.275px;
  text-decoration: none;
}

span {
  display: flex;
  margin: 6px 0px 0 0;
  width: 110px;
  height: 5px;
  background: ${props => props.theme.colors.backgoundGreen};
}

button {
  background: ${props => props.theme.colors.backgoundGreen};
  display: flex;
  width: 168px;
  height: 41px;
  border: none;
  margin-left: 17px;

  > p {
    width: 128px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    margin: 11px 20px 10px 20px;
  }
}
`
