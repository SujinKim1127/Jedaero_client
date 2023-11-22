import axios from "axios";

const userSession = sessionStorage.getItem("userSession");
let token: string = "";
if (userSession) {
  const parsedSession = JSON.parse(userSession);
  token = parsedSession.user?.token || "";
} else {
  console.log("유저세션 없음");
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
