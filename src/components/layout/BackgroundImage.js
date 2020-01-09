import styled from 'styled-components'
import Image from '../images/heroImage.jpg';

export const BackgroundImage = styled.div`
  background-image: url(${Image});
  background-size: cover ;
  background-repeat: no-repeat;
  display:block;
  position:fixed;
  top:0;
  left:0;
  z-index:-1;
  width:100%;
  height:100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
