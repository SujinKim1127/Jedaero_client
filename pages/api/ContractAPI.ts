import { axiosInstance } from "@/pages/api/axiosInstance";
import axios from "axios";
import { FilterProps } from "./StoreAPI";

export const getContractBase = async ({
  isPicked = false,
  name = "",
  category = "NONE",
  pageNumber = 0,
}: FilterProps) => {
  try {
    const response = await axiosInstance().get(
      `/contract?isPicked=${isPicked}&name=${name}&category=${category}&pageSize=40&pageNumber=${pageNumber}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getContractInfo = async (id: number) => {
  try {
    const response = await axiosInstance().get(`/contract/details/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
