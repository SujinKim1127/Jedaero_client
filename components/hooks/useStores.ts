import { getFoods } from "@/pages/api/others";
import { useEffect, useState } from "react";

interface CouponProps {
  isPicked: boolean;
  name: string;
  category: "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC";
  pageSize: number;
  pageNumber: number;
}

export const useStores = async ({
  isPicked,
  name,
  category,
  pageSize,
  pageNumber,
}: CouponProps) => {
  const [data, setData] = useState<CouponProps | null>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFoods({
        isPicked,
        name,
        category,
        pageSize,
        pageNumber,
      });

      setData(result.coupons);
    };

    fetchData();
  }, []);

  return { data };
};
