
import { getCoupons } from "@/pages/api/coupon";
import { useEffect, useState } from "react";


interface CouponContent {
  couponName: string;
  couponStore: string;
  couponCondition: Array<string>;
  couponQuantity: number;
  couponId: number;
}

export const useCouponData = () => {

  const [coupons, setCoupons] = useState<CouponContent[]>([]);

  // api 호출해서 초기화
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCoupons({
        type: "COUPON",
        pageNumber: 1,
        pageSize: 5,
      });

      result && setCoupons(result.coupons);
    };

    fetchData();
  }, []);


  return { coupons };
};

