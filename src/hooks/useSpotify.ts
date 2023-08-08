import useSWR from 'swr';

export const useSpotify = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/spotify', fetcher);
  if (error) {
    console.log('Something went wrong!', error);
  }

  return { data, isLoading };
};
