import axios from "axios";

const apiBase = () => {
  const userSession = sessionStorage.getItem("userSession");
  let token: string = "";
  if (userSession) {
    const parsedSession = JSON.parse(userSession);
    token = parsedSession.user?.token || "";
  } else {
    console.log("유저세션 없음");
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 3000,
    headers: { Authorization: `Bearer ${token}` },
  });
};

interface CouponProps {
  type: "COUPON";
  pageSize?: number;
  pageNumber?: number;
}

export const getCoupons = async ({
  type,
  pageSize = 40,
  pageNumber = 0,
}: CouponProps) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_GET_COUPONS}?type=${type}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const response = await apiBase().get(url);
    return response.data;
  } catch (e) {
    console.error(`Error 코드 : ${e}`);
  }
};

// interface
interface EventProps {
  storeId: number;
  type: "COUPON" | "STAMP";
  name: string;
  conditions: string[];
  discount: number;
  quantity: number;
  startDate?: string;
  duration?: string;
}

export const createCoupon = async ({
  storeId,
  type,
  name,
  conditions,
  discount,
  quantity,
}: EventProps) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_POST_COUPON}`;
    const response = await apiBase().post(url, {
      storeId,
      type,
      name,
      conditions,
      discount,
      quantity,
    });
    return response.data;
  } catch (e) {
    console.error(`Error 코드 : ${e}`);
  }
};
