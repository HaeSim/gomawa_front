import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect, { Middleware } from 'next-connect';
import dbConnect from './dbConnect';

const handler = (
  ...middleware: Middleware<NextApiRequest, NextApiResponse>[]
) => {
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res) => {
      console.log('DB Connect error: ', err);
    },
    onNoMatch: (req, res) => {
      console.log('No Match route');
    },
  }).use(dbConnect, ...middleware);
};

export default handler;
