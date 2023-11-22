export type StoreMapListInfo = {
  address: string;
  category: "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC" | "NONE";
  description: string;
  distance: number;
  isPicked: boolean;
  storeId: number;
  storeName: string;
  latitude: number;
  longitude: number;
};

interface businessHour {
  dayOfWeek: string;
  openingTime: string;
  closingTime: string;
}

export type StoreDetailInfo = {
  address: string;
  businessHours: businessHour[];
  category: "음식점" | "카페" | "문화" | "미용" | "기타";
  description: string;
  distance: number;
  latitude: number;
  longitude: number;
  mapUrl: string;
  phoneNumber: string;
  picked: boolean;
  storeId: number;
  storeName: string;
};
