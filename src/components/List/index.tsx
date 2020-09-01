import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';
import axios from 'axios';

import Button from '../Button';

type ListPost = {
  posts: Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;
};

const List: React.FC<ListPost> = ({ posts }) => {
  const router = useRouter();

  const handleDeletePost = useCallback((id: number) => {
    async function handleDelete() {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
    handleDelete();
    alert(`O post de id ${id} foi deletado!`);
  }, []);

  return (
    <S.ListPost>
      <h1>Listagem de Posts</h1>

      {posts.map((post) => {
        return (
          <S.Wrapper key={post.id}>
            <S.Post header={true}>
              {post.id} - {post.title}
            </S.Post>

            <S.Body>
              <S.Post body={true}> {post.body}</S.Post>
            </S.Body>

            <S.ButtonOptions>
              <Button
                onClick={() =>
                  router.push({
                    pathname: '/detalhes',
                    search: 'userId=1'
                  })
                }
              >
                visualizar comentários
              </Button>
              <Button onClick={() => handleDeletePost(post.id)}>deletar</Button>
            </S.ButtonOptions>
          </S.Wrapper>
        );
      })}
    </S.ListPost>
  );
};

export default List;
