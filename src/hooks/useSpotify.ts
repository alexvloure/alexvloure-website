import { useQuery } from '@tanstack/react-query';

export const useSpotify = () => {
  const fetchSpotify = () => {
    return fetch('/api/spotify').then((response) => response.json());
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ['spotify'],
    queryFn: fetchSpotify,
    staleTime: 5 * (60 * 1000), // 5 minutes
  });
  if (error) {
    console.log('Something went wrong!', error);
  }

  return { data, isLoading };
};
