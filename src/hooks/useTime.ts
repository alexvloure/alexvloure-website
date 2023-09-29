import { useQuery } from '@tanstack/react-query';

export const useTime = () => {
  const fetchTime = () => {
    return fetch(
      'https://api.sunrise-sunset.org/json?lat=42.8804219&lng=-8.5458608&formatted=0'
    ).then((response) => response.json());
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ['time'],
    queryFn: fetchTime,
    staleTime: 5 * (60 * 1000), // 5 minutes
  });
  if (error) {
    console.log('Something went wrong!', error);
  }
  return { data, isLoading };
};
