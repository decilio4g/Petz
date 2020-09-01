import styled, { css } from 'styled-components';

interface Props {
  header?: boolean;
  body?: boolean;
}

export const Wrapper = styled.div`
  @media (min-width: 700px) {
    width: 67rem;
    margin: 0 auto;
    padding: 2rem 4rem;
  }
`;

export const ListPost = styled.article`
  display: flex;
  flex-direction: column;
  height: 10rem;
  padding: 0 0.8rem;

  h1 {
    font-size: 3rem;
    margin: 5rem;
    text-align: center;
    color: #555;
  }
`;

export const Post = styled.li<Props>`
  font-size: 1.6rem;
  list-style: none;

  ${(props) =>
    props.header &&
    css`
      font-weight: 500;
      color: #555;
    `}

  ${(props) =>
    props.body &&
    css`
      padding: 2rem 0;
      font-weight: 300;
      color: #6e6e6e;
    `}
`;

export const Id = styled.aside`
  display: flex;
`;
export const Body = styled.aside``;

export const ButtonOptions = styled.aside`
  display: flex;
  justify-content: space-around;

  width: 100%;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #00a0e4;
    }
  }
`;
