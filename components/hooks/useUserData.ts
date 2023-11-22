import { useState } from "react";

interface Data {
  name: string;
  phoneNum: string;
  email: string;
}

export const useUserData = () => {
  const [userData, setUserData] = useState<Data>(exData);

  return { userData };
};

const exData = {
  name: "건국대학교 예술대학학생회 ‘뿡뿡’",
  phoneNum: "010-5340-5490",
  email: "konkuk.admin@gmail.com",
};
