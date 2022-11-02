import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';

import Layout from 'components/layout/Index';
import Landing from 'components/Landing';
import Contents from 'components/Contents';
import ModalFrame from 'components/Modal/Popup/ModalFrame';
import GettingReady from 'components/Modal/Popup/GettingReady';

const Home: NextPage = () => {
  const [gettingReadyModalOpen, setGettingReadyModalOpen] = useState(false);

  return (
    <div>
      {gettingReadyModalOpen && (
        <ModalFrame
          setOnModal={(bool: boolean) => setGettingReadyModalOpen(bool)}
        >
          <GettingReady popupHandler={setGettingReadyModalOpen} />
        </ModalFrame>
      )}
      <Layout popupHandler={setGettingReadyModalOpen}>
        <Landing popupHandler={setGettingReadyModalOpen} />
        <Contents />
      </Layout>
    </div>
  );
};

export default Home;
