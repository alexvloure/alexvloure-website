import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

export const useWeather = () => {
  const { i18n } = useTranslation('global');
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/weather/${i18n.language}`,
    fetcher
  );
  if (error) {
    console.log('Something went wrong!', error);
  }

  return { data, isLoading };
};
