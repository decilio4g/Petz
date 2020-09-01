import styled from 'styled-components';

export const Button = styled.button`
  width: 40%;
  height: 3rem;
  background-color: #00a0e4;
  color: #fff;
  border: 0;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  outline: none;
  font-weight: 800;
  transition: transform 80ms ease-in;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #00a0e4;
    border: 1px solid #00a0e4;
    transition: 0.2s;
  }

  &:active {
    transform: scale(0.95);
  }
`;
