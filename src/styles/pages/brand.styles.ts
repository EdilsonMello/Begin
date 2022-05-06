import styled from 'styled-components'

export const Container = styled.div `
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
margin-bottom: 70px;

@media (min-width: 1440px) {
  margin-bottom: 143px;
}

h1 {
  text-align: center;
  width: 250px;
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 36px;
  color: #000000;

  @media (min-width: 1440px) {
    width: 360px;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
  }
}

.brands {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  flex-direction: column;
  width: 281px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 604px;
  }

  @media (min-width: 1440px) {
    width: 926px;
  }

  .first,
  .second {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
      justify-content: space-around;
      width: auto;
    }

    > span {
      margin: 0 45px 25px 0px;

      @media (min-width: 768px) {
        margin: 0 35px 0 0;
      }

      @media (min-width: 1440px) {
        margin: 0 55px 0 0;
      }
    }
  }
}

.brand1 {
  width: 104px;
  height: 22px;
  background-image: url('brand1-mobile.svg');
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    width: 163px;
    height: 40px;
    background-image: url('brand1.svg');
    background-repeat: no-repeat;
  }
}

.brand2 {
  width: 55px;
  height: 30px;
  background-image: url('brand2-mobile.svg');
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    width: 103px;
    height: 50px;
    background-image: url('brand2.svg');
    background-repeat: no-repeat;
  }
}

.brand3 {
  width: 94px;
  height: 31px;
  background-image: url('brand3-mobile.svg');
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    width: 143px;
    height: 50px;
    background-image: url('brand3.svg');
    background-repeat: no-repeat;
  }
}

.brand4 {
  width: 94px;
  height: 31px;
  background-image: url('brand4-mobile.svg');
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    width: 145px;
    height: 50px;
    background-image: url('brand4.svg');
    background-repeat: no-repeat;
  }
}

.brand5 {
  display: flex;
  width: 94px;
  height: 31px;
  background-image: url('brand5-mobile.svg');
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    width: 145px;
    height: 50px;
    background-image: url('brand5.svg');
    background-repeat: no-repeat;
  }
}



`
