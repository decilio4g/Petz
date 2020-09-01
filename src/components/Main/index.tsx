import { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import axios from 'axios';
import List from '../../components/List';

interface ListPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Main = () => {
  const [posts, setPosts] = useState<ListPost[]>([]);
  const [id, setId] = useState('');
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    async function handleGetPosts() {
      if (filtered !== '') {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${filtered}`
        );
        console.log('1a', res.data);
        setPosts(res.data);
      } else {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(response.data);
      }
    }
    handleGetPosts();
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

      <List posts={posts} />
    </S.Wrapper>
  );
};

export default Main;
