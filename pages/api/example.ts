import { NextApiRequest, NextApiResponse } from 'next';
import { getPosts } from 'lib/api/example';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await getPosts();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        error: error.toString(),
      });
    }
  } else {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
