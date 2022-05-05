import styled from 'styled-components'

export const Container = styled.div `
display: flex;
width: 100%;
height: 100%;
max-height: 582px;
background-image: url('background.svg');
align-items: center;
justify-content: center;
position:absolute;

.content {
  display: flex;
  width: 100%;
  margin: 21px 157px 0px;
  height: 100%;
  max-height: 383px;
  background-image: url('banner.svg');
  background-repeat: repeat-y;
  background-position: right;
  flex-direction: column;
}

.text {
  margin: 20px 0 0 55px;
}

h1 {
  width: 459px;
  height: 142px;
  font-family: 'Playfair';
  font-style: normal;
  font-weight: 900;
  font-size: 59px;
  line-height: 71px;
  margin-bottom: 10px;
}

p {
  width: 406px;
  height: 52px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 445px;
  height: 65px;
  margin-top: 35px;

  button {
    display: flex;
    width: 200px;
    background: ${props => props.theme.colors.backgoundGreen};
    border: none;
    align-items: center;
    justify-content: center;

  }

  .demo {
    background: #fff;
    border: solid 3px ${props => props.theme.colors.backgoundGreen};

    > span {
      color: ${props => props.theme.colors.backgoundGreen};
    }
  }

  span {
    height: 25px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 900;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.05px;
    color: #fff;
  }
}
`
