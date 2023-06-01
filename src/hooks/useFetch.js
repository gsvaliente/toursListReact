import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(url);

      if (!res.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      setList(data);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemoveTour = (id) => {
    const newList = list.filter((tour) => tour.id !== id);
    setList(newList);
  };

  const handleRestoreList = () => {
    fetchData();
  };

  return {
    list,
    isLoading,
    isError,
    useFetch,
    handleRestoreList,
    handleRemoveTour,
  };
};
