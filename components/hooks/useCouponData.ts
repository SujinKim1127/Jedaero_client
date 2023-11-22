import { useState } from "react";

interface CouponContent {
  couponName: string;
  couponStore: string;
  couponCondition: Array<string>;
  couponQuantity: number;
}

export const useCouponData = () => {
  const [coupons, setCoupons] = useState<CouponContent[]>(exData);

  // api 호출해서 초기화

  return { coupons };
};

// 예시 데이터
const exData: CouponContent[] = [
  {
    couponName: "엽떡 10000원 할인",
    couponStore: "엽기 떡볶이",
    couponCondition: ["10만원 이상 구매시", "4명 이상이 오면"],
    couponQuantity: 50,
  },
  {
    couponName: "소소 떡볶이 10000원 할인",
    couponStore: "엽기 떡볶이",
    couponCondition: ["10만원 이상 구매시", "4명 이상이 오면"],
    couponQuantity: 50,
  },
];
