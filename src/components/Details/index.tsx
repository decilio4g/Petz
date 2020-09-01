import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import axios from 'axios';

import Comments from '../Comments';

interface PropsComments {
  id: number;
  postIds: number;
  body: string;
  email: string;
  name: string;
}

const Details: React.FC = () => {
  const [comments, setComments] = useState<PropsComments[]>([]);
  const [id, setId] = useState('');
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    async function handleGetComments() {
      if (filtered !== '') {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${filtered}`
        );
        setComments(res.data);
      } else {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts/1/comments'
        );
        setComments(response.data);
      }
    }

    handleGetComments();
  }, [filtered]);

  const handleSubmit = useCallback((filteredId) => {
    setFiltered(filteredId);
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo
          src="/img/logo.png"
          alt="Uma logo escrito petz e uma breve descrição"
        />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Digite um número de ID..."
        />

        <button type="button" onClick={() => handleSubmit(id)}>
          Buscar
        </button>
      </S.Header>

      <Comments comments={comments} />
    </S.Wrapper>
  );
};

export default Details;
