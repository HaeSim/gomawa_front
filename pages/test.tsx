import { getSales } from 'lib/api/example';
import clientPromise from 'lib/mongodb';
import React, { useEffect } from 'react';

const Test = () => {
  useEffect(() => {}, []);

  return <div></div>;
};

export default Test;

export const getServerSideProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('example');
    const sales = db.collection('sales');

    console.log(await sales.find().sort({ _id: 1 }).toArray());

    return {
      props: {
        data: null,
      },
    };
  } catch (error) {}
};
