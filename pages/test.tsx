import React, { useEffect, useState } from 'react';
import axios from 'axios';
import clientPromise from 'lib/mongodb';

const Test = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('getServerSideProps response: ', props.posts);

    try {
      (async () => {
        const res = await axios.get('/api/example');

        setPosts(res.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <p key={post._id}>{`${post.content} From ${post.author}`}</p>;
      })}
    </div>
  );
};

export default Test;

export const getServerSideProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('gomawa');
    const posts = db.collection('posts');

    const res = await posts.find().sort({ _id: 1 }).toArray();
    return {
      props: {
        posts: res,
      },
    };
  } catch (error) {}
};
