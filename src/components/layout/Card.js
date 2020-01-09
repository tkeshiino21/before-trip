import styled, { css } from 'styled-components';

const mixinCardSize = css`
  height: 54vh;
  width: 40vh;
`;

export const CardContainer = styled.div `
  cursor: pointer;
  ${mixinCardSize}
  perspective: 800px;
  margin: auto;
  margin-top: 40px;
  transition: ease-in;
  position: relative;
`

export const Card = styled.div `
  ${mixinCardSize}
  position: absolute;
  border: 1px solid #300;
  transform-style: preserve-3d;
  transition: all 0.4s ease-in-out;

  :hover {
    transform: rotateY(180deg);
    transition: all 0.4s ease-in-out;
  }
`

export const Front = styled.div `
  ${mixinCardSize}
  backface-visibility: hidden;
  position: absolute;
  overflow: hidden;
  text-align: center;
  background-color: rgba(255, 251, 251, 1);
`

export const Back = styled.div `
  ${mixinCardSize}
  text-align: center;
  transform: rotateY(180deg);
  background-color: rgba(255, 251, 251, 1);
`

export const Jp = styled.div`
  color: #333;
  font-size: 2.3em;
  padding-top: 30%;
`

export const Pt = styled.div`
  color: #333;
  font-size: 5.3em;
  padding-top: 20%;
`

export const Kana = styled.div`
  color: rgba(200, 10, 10, 1);
  font-size: 2.3em;
  padding-top: 10%;
`
