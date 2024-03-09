import { useEffect, useState } from "react";
import { fetchData } from "./api";

const useFetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      const result = await fetchData();
      setPosts(result);
    };
    fetchDataFromServer();
  }, []);

  return posts;
};

export default useFetchData;
