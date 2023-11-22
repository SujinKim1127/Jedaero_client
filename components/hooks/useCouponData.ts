
import { getCoupons } from "@/pages/api/coupon";
import { useEffect, useState } from "react";


interface CouponContent {
  couponName: string;
  couponStore: string;
  couponCondition: Array<string>;
  couponQuantity: number;
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

// // 예시 데이터
// const exData: CouponContent[] = [
//   {
//     couponName: "엽떡 10000원 할인",
//     couponStore: "엽기 떡볶이",
//     couponCondition: ["10만원 이상 구매시", "4명 이상이 오면"],
//     couponQuantity: 50,
//   },
//   {
//     couponName: "소소 떡볶이 10000원 할인",
//     couponStore: "엽기 떡볶이",
//     couponCondition: ["10만원 이상 구매시", "4명 이상이 오면"],
//     couponQuantity: 50,
//   },
// ];
