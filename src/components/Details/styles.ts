import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  @media (min-width: 700px) {
    input {
      width: 28rem !important;
    }
  }

  @media (min-width: 800px) {
    input {
      width: 40rem !important;
    }
  }

  @media (min-width: 1000px) and (max-width: 1100px) {
    input {
      width: 60rem !important;
    }
  }

  @media (min-width: 1100px) {
    input {
      width: 100em !important;
      margin-right: 2rem !important;
    }

    button {
      width: 15rem !important;
      margin-right: 1rem;
    }
  }

  background-color: #ffd400;

  display: flex;
  justify-content: space-around;
  align-items: center;

  input {
    width: 25rem;
    height: 4rem;
    outline: 0;
    border: 0;
    border-radius: 0.8rem;
    padding-left: 1rem;
  }

  button {
    outline: 0;
    border: 0;
    height: 4rem;
    width: 7rem;
    border-radius: 0.8rem;
    color: #fff;
    font-weight: 700;
    background-color: #00a0e4;
    transition: transform 80ms ease-in;
    cursor: pointer;

    &:active {
      transform: scale(0.95);
    }
  }
`;

export const Logo = styled.img`
  width: 13rem;
  object-fit: cover;
  padding: 2rem 2rem 1rem 2rem;
  margin-bottom: 2rem;

  @media (min-width: 700px) {
    width: 20rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
