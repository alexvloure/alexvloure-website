import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const lat = '42.878212';
  const lon = '-8.544844';
  const exclude = 'minutely,hourly,daily';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=es&exclude=${exclude}&appid=${process.env.OPENWEATHER_KEY}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());
  res.status(200).json(response);
}
