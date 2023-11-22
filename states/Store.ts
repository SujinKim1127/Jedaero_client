import { atom } from "recoil";

export const NewClickStore = atom({
  key: "NewClickStore",
  default: {
    isClick: false,
    name: "",
    type: "",
    lat: 0,
    lng: 0,
  },
});
