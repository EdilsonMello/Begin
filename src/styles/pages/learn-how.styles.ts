import styled from 'styled-components'

export const Container = styled.div `
display: flex;
width: 100%;
background-image: url('second.background.svg');
background-repeat: repeat-y;
align-items: center;
justify-content: center;
height: 1560px;
flex-direction: column;

.video {
  display: flex;
  background-image: url('video.svg');
  background-repeat: repeat-y;
  width: 100%;
  max-width: 944px;
  height: 530px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 80px;
    color: #FFFFFF;
    margin-bottom: 60px;
  }

  >  button {
    display: flex;
    width: 200px;
    height: 65px;
    background: #fff;
    border: none;
    align-items: center;
    justify-content: center;

    > p {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 900;
      font-size: 21px;
      line-height: 25px;
      text-align: center;
      letter-spacing: 1.05px;
      color:  ${props => props.theme.colors.backgoundGreen};
    }
  }
}
.content {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 100px 0 150px 0;

  .first-card {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 445px;
    background: #fff;
    align-items: center;
    padding-bottom: 20px;

    > span {
      background-image: url('photo.svg');
      background-repeat: repeat-y;
      width: 320px;
      height: 283px;
    }
  }

  .second-card {
    display: flex;
    flex-direction: column;
    width: 320px;
    background: #fff;
    align-items: center;
    margin: 80px 0 0 47px;
    padding-bottom: 20px;

    > span {
      background-image: url('photo2.svg');
      background-repeat: repeat-y;
      width: 320px;
      height: 243px;
    }

  }

  p {
    width: 251px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
    margin-top: 18px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    width: 251px;

    > p {
      height: auto;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      color: ${props => props.theme.colors.backgoundGreen};
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: 130px 0 0 27px;

    > h1 {
      width: 365px;
      height: 144px;
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 900;
      font-size: 44px;
      line-height: 48px;
      color: #000000;
    }

    > p {
      margin-top: 24px;
      width: 322px;
      height: 156px;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 26px;
      color: #000000;
    }
  }
}
`
