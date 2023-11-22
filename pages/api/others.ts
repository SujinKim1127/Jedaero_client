import { axiosInstance } from "./axiosInstance";

interface FoodProps {
  isPicked: boolean;
  name: "string";
  category: "FOOD";
  pageSize: 40;
  pageNumber: 0;
}

// export const getFoods = async ({
//   type,
//   pageSize = 40,
//   pageNumber = 0,
// }: CouponProps) => {
//   try {
//     const url = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_GET_COUPONS}?isp=${type}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
//     const response = await axiosInstance().get(url);
//     return response.data;
//   } catch (e) {
//     console.error(`Error 코드 : ${e}`);
//   }
// };

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
