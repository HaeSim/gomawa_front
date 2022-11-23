import { NextApiRequest, NextApiResponse } from 'next';
import { getSales } from 'lib/api/example';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await getSales();

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
