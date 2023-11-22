import { getPopups } from "@/pages/api/popup";
import { useEffect, useState } from "react";

// enum PopupPeriod {
//   none,

//   aDay = "하루간",
//   aWeek = "1주간",
//   twoWeek = "2주간",
//   aMonth = "1달간",
// }

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
      console.log(data);

      data && setPopups(data.content);
    };

    fetchData();
  }, []);

  return { popups };
};
