import styled from 'styled-components'

export const Container = styled.div `
display: flex;
width: 100%;
height: 1200px;
align-items: center;
justify-content: center;
flex-direction: column;

@media (min-width: 768px) {
  height: 1000px;
}

@media (min-width: 1440px) {
  height: 1560px;
}

.background {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('mid-background-mobile.svg');
  background-repeat: no-repeat;
  position: absolute;
  height: 1200px;
  width: 360px;

  @media (min-width: 768px) {
    background-image: url('mid-background-tablet.svg');
    background-repeat: no-repeat;
    position: absolute;
    width: 768px;
    height: 980px;
  }

  @media (min-width: 1440px) {
    background-image: url('second.background.svg');
    background-repeat: repeat-y;
    position: absolute;
    width: 1440px;
    height: 1560px;
  }
}

.video {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('video-mobile.svg');
  background-repeat: repeat-y;
  height: 171px;
  width: 304px;
  margin-top: 35px;

  @media (min-width: 768px) {
    margin-top: 80px;
    width: 616px;
    height: 347px;
    background-image: url('video-tablet.svg');
    background-repeat: repeat-y;
  }

  @media (min-width: 1440px) {
    width: 944px;
    height: 530px;
    margin-top: 140px;
    background-image: url('video.svg');
    background-repeat: repeat-y;
  }

  > h1 {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    color: #FFFFFF;
    font-size: 22px;
    line-height: 29px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 38px;
      line-height: 51px;
      margin-bottom: 40px;
    }

    @media (min-width: 1440px) {
      font-size: 60px;
      line-height: 80px;
      margin-bottom: 60px;
    }
  }

  >  button {
    display: flex;
    background: #fff;
    border: none;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 21px;

    @media (min-width: 768px) {
      width: 132px;
      height: 42px;
    }

    @media (min-width: 1440px) {
      width: 200px;
      height: 65px;
    }

    > p {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 900;
      text-align: center;
      color:  ${props => props.theme.colors.backgoundGreen};
      font-size: 6px;
      line-height: 7px;
      text-align: center;
      letter-spacing: 0.3px;

      @media (min-width: 768px) {
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.65px;
      }

      @media (min-width: 1440px) {
        font-size: 21px;
        line-height: 25px;
        letter-spacing: 1.05px;
      }
    }
  }
}

.content {
  display: flex;
  width: 360px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    margin: 70px 0 150px 0;
  }

  .first-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items: start;
    width: 209px;
    margin: 33px 0 15px 15px;

    @media (min-width: 1440px) {
      align-items: center;
      padding-bottom: 20px;
      width: 320px;
      height: 464px;
    }

    > span {
      width: 209px;
      height: 180px;
      background-image: url('photo-mobile2.svg');
      background-repeat: repeat-y;

      @media (min-width: 1440px) {
        width: 320px;
        height: 283px;
        background-image: url('photo.svg');
        background-repeat: repeat-y;
        margin-bottom: 20px;
      }
    }

    > p {
      margin-bottom: 15px;

      @media (min-width: 768px) {
        margin-bottom: none;
      }
    }
  }

  .second-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items: end;
    width: 209px;
    margin: 0 15px 0 37%;
    height: 320px;

    @media (min-width:768px) {
      margin: 90px 0 0 20px;
      align-items: start;
    }

    @media (min-width: 1440px) {
      padding-bottom: 20px;
      margin: 100px 0 0 47px;
      align-items: center;
      width: 320px;
      height: 430px;
    }

    > span {
      width: 210px;
      height: 180px;
      background-image: url('photo-mobile1.svg');
      background-repeat: repeat-y;

      @media (min-width: 1440px) {
        width: 320px;
        height: 243px;
        background-image: url('photo2.svg');
        background-repeat: repeat-y;
        margin-bottom: 20px;
      }
    }

    > button {
      justify-content: end;
      margin-left: 120px;

      @media (min-width: 768px) {
        text-align: start;
        justify-content: start;
        margin: 20px 0 0 0;
      }
    }

    > p {
      text-align: end;

      @media (min-width: 768px) {
        text-align: start;
      }
    }

  }

  p {
    width: 170px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    color: #000000;
    font-size: 12px;
    line-height: 16px;
    padding: 15px;

    @media (min-width: 1440px) {
      font-size: 16px;
      width: 251px;
      line-height: 26px;
      margin: 0;
      padding: 0 15px;
    }
  }

  button {
    display: flex;
    justify-content: start;
    background: transparent;
    border: none;
    width: 100%;

    @media (min-width: 1440px) {
      justify-content: center;
      align-items: center;
      width: 251px;
    }

    > p {
      height: auto;
      font-family: 'Raleway';
      text-align: start;
      font-style: normal;
      font-weight: 800;
      color: ${props => props.theme.colors.backgoundGreen};
      font-size: 12px;
      line-height: 14px;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 19px;
      }

      @media (min-width:1440px;) {
        width: 251px;
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: 20px 35px 0px 35px;

    @media (min-width: 768px) {
      margin-top: 120px;
    }

    @media (min-width: 1440px) {
      margin: 140px 0 0 27px;
    }

    > h1 {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 900;
      color: #000000;
      width: 232px;
      height: 93px;
      font-size: 28px;
      line-height: 31px;

      @media (min-width: 1440px) {
        font-size: 44px;
        line-height: 48px;
        width: 365px;
        height: 144px;
      }
    }

    > p {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 500;
      color: #000000;
      font-size: 12px;
      line-height: 16px;
      width: 203px;
      height: 96px;
      margin-top: 10px;
      padding: 0;

      @media (min-width: 768px) {
        margin-top: 17px;
        padding: 15px;
      }

      @media (min-width: 1440px) {
        font-size: 19px;
        line-height: 26px;
        margin-top: 24px;
        width: 322px;
        height: 156px;
      }
    }
  }
}
`
