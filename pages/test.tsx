import axios from 'axios';
import { getSales } from 'lib/api/example';
import clientPromise from 'lib/mongodb';
import React, { useEffect } from 'react';

const Test = ({ sales }) => {
  useEffect(() => {
    console.log('getServerSideProps sales: ', sales);

    (async () => {
      const res = await axios.get('/api/example');

      console.log('/pages/api/example response: ', res);
    })();
  }, []);

  return <div></div>;
};

export default Test;

export const getServerSideProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('example');
    const sales = db.collection('sales');

    const res = await sales.find().sort({ _id: 1 }).toArray();
    return {
      props: {
        sales: res,
      },
    };
  } catch (error) {}
};
