import axios from "axios";
import {useState, useEffect} from 'react';

const instance = axios.create({
  baseURL: "ادرس سایتید هست که ای پی ای مورد نظر را می گذاریم",
});
const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await instance.request(axiosParams);
      setResponse(result.data);
      console.log(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [ response, error, loading ];
};

export default useAxios;
