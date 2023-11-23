import axios from "axios";
import { axiosInstance } from "./axiosInstance";

const apiBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
});

// interfaces
interface LoginProps {
  email: string;
  password: string;
}

interface SignUpProps {
  email: string;
  password: string;
  type: "총학생회" | "단과대학생회" | "과학생회";
  typeName: string;
  proofImageUrl: string;
}

// 로그인
export const login = async ({ email, password }: LoginProps) => {
  try {
    const response = await apiBase.post(
      `${process.env.NEXT_PUBLIC_LOGIN_ENDPOINT}`,
      { email, password }
    );

    const accessToken = response.headers.authorization;
    console.log("로그인 성공:", accessToken);

    return { data: response.data, accessToken };
  } catch (error) {
    console.error("로그인 오류:", error);
    throw error;
  }
};

// 회원가입
export const SignUp = async ({
  email,
  password,
  type,
  typeName,
  proofImageUrl,
}: SignUpProps) => {
  try {
    const response = await apiBase.post(
      `${process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT}`,
      {
        email,
        password,
        type,
        typeName,
        proofImageUrl,
      }
    );

    return response.data;
  } catch (error) {
    console.error("회원가입 오류:", error);
    throw error;
  }
};

// 이미지 업로드 (회원가입 전에)
export const CreateImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiBase.post(
      `${process.env.NEXT_PUBLIC_CREATE_IMAGE_ENDPOINT}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("업로드 오류:", error);
    throw error;
  }
};

// 로그아웃
export const Logout = async () => {


  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_LOGOUT_ENDPOINT}`;
    const response = await axiosInstance().post(url);
    return response.data;
  } catch (e) {
    console.error(`Error 코드 : ${e}`);
  }
};

