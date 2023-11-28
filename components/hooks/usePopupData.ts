import { getPopups } from "@/pages/api/popup";
import { useEffect, useState } from "react";

interface Popup {
  title: string;
  content: string;
  endData: string;
  reservation: string;
  storeId: number;
}

export const usePopupData = () => {
  const [popups, setPopups] = useState<Popup[]>([]);

  // api 호출해서 초기화
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopups(0);
      data && setPopups(data.content);
    };

    fetchData();
  }, []);

  return { popups };
};
