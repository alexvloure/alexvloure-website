import { NextApiRequest, NextApiResponse } from 'next';
import SpotifyWebApi from 'spotify-web-api-node';

// const getAccessToken = async () => {
//   const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
//   const basic = Buffer.from(
//     `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
//   ).toString('base64');

//   const config = {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${basic}`,
//     },
//   };

//   const { access_token } = await fetch(
//     'https://accounts.spotify.com/api/token',
//     {
//       method: 'POST',
//       body: 'grant_type=client_credentials',
//       headers: config.headers,
//     }
//   )
//     .then((res) => res.json())
//     .catch((err) => console.log('Something went wrong!', err));

//   return access_token;
// };

const api = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // https://accounts.spotify.com/authorize?response_type=code&client_id=3a43fb5daf2744139e043e53a726daeb&scope=user-read-recently-played&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback
  // code = AQCt_94G02QS6T88SfT-766gGez1QxXh4omsqMxdWEpugH0S5dsAZkRxSJqFmNDTztDsbe-PElrDWWpFjWF-9yAY1Vc5kjWq3Is82rV_1z5LAwb08G60Kr4LjzBylIy94zPNqUIzn7ZHopPmrO5lhIY6qcL1P2es_gqdZ9NQfcXY6PfCPPFOwWNQqIaj2UTUQ5hq5L0Fi9A6baPeRQ

  try {
    api.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN!);
    const data = await api.refreshAccessToken();
    api.setAccessToken(data.body['access_token']);

    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1,
    });
    res.status(200).json(recentTracks.body.items[0].track);
  } catch (err) {
    console.log('Something went wrong!', err);
  }

  // const access_token = await getAccessToken();

  // if (access_token) {
  //   const url = 'https://api.spotify.com/v1/me/player/recently-played';
  //   const config = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${access_token}`,
  //     },
  //   };
  //   const response = await fetch(url, config)
  //     .then((res) => res.json())
  //     .catch((err) => console.log('Something went wrong!', err));

  //   console.log(response);
  // }
}
