import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Post } from 'models/Post';
import Card from 'components/Card';

const Test = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    from: '',
    to: '',
  });
  const { title, description, from, to } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // C
  const setHandler = async () => {
    try {
      const result = await axios.post<Post[]>('/api/post', {
        createdAt: new Date().toLocaleDateString(),
        title,
        description,
        from,
        to,
        anonymous: false,
        reveal: true,
      });

      setInputs({
        title: '',
        description: '',
        from: '',
        to: '',
      });

      alert('success');
    } catch (error) {
      console.log(error);
    }
  };

  // R
  const getHandler = async () => {
    try {
      const res = await axios.get<Post[]>('/api/post');
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // D
  const deleteHandler = async () => {
    try {
      await axios.delete('/api/post');
      alert('success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button onClick={getHandler}>get</Button>
        <Button onClick={setHandler}>set</Button>
        <Button onClick={deleteHandler}>delete all</Button>
      </div>
      <div>
        <p>Title</p>
        <input onChange={onChange} name='title' value={title} />
        <p>Description</p>
        <textarea onChange={onChange} name='description' value={description} />
        <p>From</p>
        <input onChange={onChange} name='from' value={from} />
        <p>To</p>
        <input onChange={onChange} name='to' value={to} />
      </div>

      <Grid>
        {posts.map((post, idx) => {
          return (
            <Card
              key={post._id}
              title={post.title}
              createAt={post.createdAt}
              from={post.from}
              to={post.to}
              rotate={0}
            >
              {post.description}
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
`;

const Button = styled.button`
  background-color: #9cdcfe;
  width: 100px;
  height: 40px;
  margin-top: 16px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
`;

export default Test;
