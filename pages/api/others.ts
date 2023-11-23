import { axiosInstance } from "./axiosInstance";



interface CouponProps {
  isPicked: boolean;
  name: string;
  category: "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC";
  pageSize: number;
  pageNumber: number;
}

// 가게조회
export const getFoods = async ({
  isPicked,
  name,
  category,
  pageSize,
  pageNumber,
}: CouponProps) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_GET_COUPONS}?isPicked=${isPicked}&name=${name}&category=${category}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const response = await axiosInstance().get(url);
    return response.data;
  } catch (e) {
    console.error(`Error 코드 : ${e}`);
  }
};



export const getUnivs = async () => {
  try {
    const response = await axiosInstance().get(
      `${process.env.NEXT_PUBLIC_GET_UNIV}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
