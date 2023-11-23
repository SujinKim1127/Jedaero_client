import axios from "axios";


import { axiosInstance } from "./axiosInstance";


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


    const response = await axiosInstance().get(url);


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

    const response = await axiosInstance().post(url, {


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


interface DeleteProps {
  items: number[];
}

export const deleteCoupons = async ({ items }: DeleteProps) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_DELETE_COUPONS}?type=COUPON&ids=${items}`;
    const response = await axiosInstance().delete(url);
    return response.data;
  } catch (e) {
    console.error(`Error 코드 : ${e}`);
  }
};


