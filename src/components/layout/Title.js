import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";

const TitleWrapper = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  font-size: 64px;
  text-align: center;
  letter-spacing: 20px;
  font-family: 'Oswald';
  color: #000;
  margin-top: 20px;
  ${media.lessThan("small")`
    font-size: 56px;
    letter-spacing: 12px;
  `};
`;

export default function Title() {
  return (
    <TitleWrapper>
      Before:trip
    </TitleWrapper>
  )
}