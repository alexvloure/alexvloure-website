import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=42.8804219&lng=-8.5458608&formatted=0`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
