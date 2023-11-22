export type ContractListInfo = {
  category: "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC" | "NONE";
  storeId: number;
  storeName: string;
  benefits: Benefit[];
};

type Benefit = {
  amount: number;
  benfitId: number;
  content: string;
  type: "FIX" | "RATE" | "MENU";
};

export type ContractInfo = {
  benefits: Benefit[];
  category: "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC" | "NONE";
  endDate: string;
  latitude: number;
  longitude: number;
  manager: string;
  mapUrl: string;
  phoneNumber: string;
  startDate: string;
  storeId: number;
  storeName: string;
  visitInfo: object;
};
