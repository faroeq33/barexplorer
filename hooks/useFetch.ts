import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "../types/types";

function useFetch() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Bar[]>([]);

  const getBars = async () => {
    try {
      const response = await axios.get(
        "https://stud.hosted.hr.nl/1041379/barData.json"
      );
      const json = response.data;
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBars();
  }, []);

  return {
    data,
    isLoading,
  };
}

export default useFetch;
