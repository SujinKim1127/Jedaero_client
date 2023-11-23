import { atom } from "recoil";

export const NewEnrollStore = atom({
  key: "NewEnrollStore",
  default: {
    storeId: 0,
    address: "",
    category: "",
    description: "",
    storeName: "",
    time: undefined,
    distance: 0,
  },
});
