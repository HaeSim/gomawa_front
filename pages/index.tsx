import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import ChannelService from 'components/ChannelService';

import Layout from 'components/layout/Index';
import Landing from 'components/Landing';
import Contents from 'components/Contents';
import ModalFrame from 'components/Modal/Popup/ModalFrame';
import GettingReady from 'components/Modal/Popup/GettingReady';
import EventPopup from 'components/Modal/Popup/EventPopup';
import EventModalFrame from 'components/Modal/Popup/EventModalFrame';

const Home: NextPage = () => {
  const [gettingReadyModalOpen, setGettingReadyModalOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);

  useEffect(() => {
    const channelTalk = new ChannelService();
    channelTalk.boot({
      pluginKey: '1889df43-432d-4200-9629-8648017307d6',
    });

    return () => {
      channelTalk.shutdown();
    };
  }, []);

  useEffect(() => {
    const expiryDate = Number(localStorage.getItem('expiryDate'));
    const visitDate = new Date().getTime();

    if (expiryDate) {
      if (expiryDate <= visitDate) {
        localStorage.removeItem('expiryDate');
        setEventModalOpen(true);
      }
    } else {
      setEventModalOpen(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>고.마.워.</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='고구맙습니다. 고마운 사우에게 감사인사를 전해보세요:)'
        />
        <meta name='title' property='og:title' content='고.마.워.' />
        <meta
          name='description'
          property='og:description'
          content='고구맙습니다. 고마운 사우에게 감사인사를 전해보세요:)'
        />
        <meta name='image' property='og:image' content='images/thumbnail.png' />
      </Head>
      {gettingReadyModalOpen && (
        <ModalFrame
          setOnModal={(bool: boolean) => setGettingReadyModalOpen(bool)}
        >
          <GettingReady popupHandler={setGettingReadyModalOpen} />
        </ModalFrame>
      )}
      {eventModalOpen && (
        <EventModalFrame
          setOnModal={(open: boolean) => setEventModalOpen(open)}
        >
          <EventPopup popupHandler={setEventModalOpen} />
        </EventModalFrame>
      )}
      <Layout popupHandler={setGettingReadyModalOpen}>
        <Landing popupHandler={setGettingReadyModalOpen} />
        <Contents />
      </Layout>
    </>
  );
};

export default Home;
