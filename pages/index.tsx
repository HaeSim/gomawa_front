import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'components/layout/Layout';
import Landing from 'components/Landing';
import Contents from 'components/Contents';

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Landing />
        <Contents />
      </Layout>
    </div>
  );
};

export default Home;
