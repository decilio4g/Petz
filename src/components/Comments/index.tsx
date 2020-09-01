import React from 'react';
import * as S from './styles';

interface PropsComments {
  comments: Array<{
    id: number;
    postIds: number;
    body: string;
    email: string;
    name: string;
  }>;
}

const Comments: React.FC<PropsComments> = ({ comments }) => {
  return (
    <S.ListPost>
      <h1>Comentários</h1>

      <ul>
        {comments?.map((comment) => {
          return (
            <S.Wrapper key={comment.id}>
              <S.Post header={true}>
                {comment.id} - {comment.name}
              </S.Post>

              <S.Body>
                <S.Post body={true}> {comment.body}</S.Post>
              </S.Body>
            </S.Wrapper>
          );
        })}
      </ul>
    </S.ListPost>
  );
};

export default Comments;
