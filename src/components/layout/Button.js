import styled from 'styled-components'

export const OutlinedButton = styled.button`
  background-color: rgba(255,255,255,0);
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;

  a {
    text-decoration: none;
    color: #000
  }
`;

export const TextButton = styled.button`
  color: ${props => props.primary ? "white" : "palevioletred"};
  background-color: rgba(255,255,255,0);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  text-decoration: none;
  border: none;

  a {
    text-decoration: none;
  }
`;
