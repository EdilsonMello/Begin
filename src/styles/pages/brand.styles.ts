import styled from 'styled-components'

export const Container = styled.div `
display: none;
width: 100%;
flex-direction: column;
align-items: center;
margin-bottom: 143px;

@media (min-width: 1440px) {
  display: flex;
}

h1 {
  width: 400px;
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 48px;
  text-align: center;
  color: #000000;
}

.brands {
  display: flex;
  width: 926px;
  justify-content: space-between;
  margin-top: 60px;

  svg {
    background: #000;
  }
}

`
