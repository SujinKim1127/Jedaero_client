import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

/*
서버에서 브라우저 전용객체 window에 접근하면 오류 발생가능
서버 환경에서는 undefined로 설정
 */
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "userSession",
  storage: sessionStorage,
});

interface UserState {
  logined: boolean;
  email: string;
  type: string;
  typeName: string;
  token: string;
}

export const initialState = atom<UserState>({
  key: "user",
  default: {
    logined: false,
    email: "",
    type: "",
    typeName: "",
    token: "",
  },
  effects_UNSTABLE: [persistAtom],
});
