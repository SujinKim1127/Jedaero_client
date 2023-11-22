import { getUnivs } from "@/pages/api/others";
import { useEffect, useState } from "react";

export const useUniv = async () => {
  const [univ, setUniv] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUnivs();
      setUniv(result);
    };

    fetchData();
  }, []);

  return { univ };
};
