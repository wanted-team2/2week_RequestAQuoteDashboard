import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = <T>(URL: string) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const request = async () => {
      const { data } = await axios(URL);
      setState(data);
    };

    request();
  }, []);

  return state;
};

export default useAxios;
