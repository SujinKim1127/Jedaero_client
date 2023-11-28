import axios from "axios";

export const axiosInstance = () => {
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
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
