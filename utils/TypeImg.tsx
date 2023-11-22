import SCafe from "@/assets/svg/Small/SCafe.svg";
import SCulture from "@/assets/svg/Small/SCulture.svg";
import SEtc from "@/assets/svg/Small/SEtc.svg";
import SFood from "@/assets/svg/Small/SFood.svg";
import SBeauty from "@/assets/svg/Small/SBeauty.svg";

import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Food from "@/assets/svg/Food.svg";
import Beauty from "@/assets/svg/Beauty.svg";

import MFood from "@/assets/svg/Mid/MFood.svg";
import MCafe from "@/assets/svg/Mid/MCafe.svg";
import MBeauty from "@/assets/svg/Mid/MBeauty.svg";
import MCulture from "@/assets/svg/Mid/MCulture.svg";
import MEtc from "@/assets/svg/Mid/MEtc.svg";

import MLFood from "@/assets/svg/57/Food.svg";
import MLCafe from "@/assets/svg/57/Cafe.svg";
import MLBeauty from "@/assets/svg/57/Beauty.svg";
import MLCulture from "@/assets/svg/57/Culture.svg";
import MLEtc from "@/assets/svg/57/Etc.svg";

import LCafe from "@/assets/svg/Big/Cafe.svg";
import LCulture from "@/assets/svg/Big/Culture.svg";
import LEtc from "@/assets/svg/Big/Etc.svg";
import LFood from "@/assets/svg/Big/Food.svg";
import LBeauty from "@/assets/svg/Big/Beauty.svg";

export const SizeTypeImgSmall = () => {
  return {
    음식점: {
      value: <SFood alt="food marker" />,
    },
    카페: {
      value: <SCafe alt="cafe marker" />,
    },
    미용: {
      value: <SBeauty alt="Beauty marker" />,
    },
    문화: {
      value: <SCulture alt="Culture marker" />,
    },
    기타: {
      value: <SEtc alt="Etc marker" />,
    },
  };
};

export const SizeTypeImg25 = () => {
  return {
    음식점: {
      value: <Food alt="food marker" />,
    },
    카페: {
      value: <Cafe alt="cafe marker" />,
    },
    미용: {
      value: <Beauty alt="Beauty marker" />,
    },
    문화: {
      value: <Culture alt="Culture marker" />,
    },
    기타: {
      value: <Etc alt="Etc marker" />,
    },
  };
};

export const SizeTypeImg49 = () => {
  return {
    음식점: {
      value: <MFood alt="food marker" />,
    },
    카페: {
      value: <MCafe alt="cafe marker" />,
    },
    미용: {
      value: <MBeauty alt="Beauty marker" />,
    },
    문화: {
      value: <MCulture alt="Culture marker" />,
    },
    기타: {
      value: <MEtc alt="Etc marker" />,
    },
  };
};

export const SizeTypeImg57 = () => {
  return {
    음식점: {
      value: <MLFood alt="food marker" />,
    },
    카페: {
      value: <MLCafe alt="cafe marker" />,
    },
    미용: {
      value: <MLBeauty alt="Beauty marker" />,
    },
    문화: {
      value: <MLCulture alt="Culture marker" />,
    },
    기타: {
      value: <MLEtc alt="Etc marker" />,
    },
  };
};

export const SizeTypeImg68 = () => {
  return {
    음식점: {
      value: <LFood alt="food marker" />,
    },
    카페: {
      value: <LCafe alt="cafe marker" />,
    },
    미용: {
      value: <LBeauty alt="Beauty marker" />,
    },
    문화: {
      value: <LCulture alt="Culture marker" />,
    },
    기타: {
      value: <LEtc alt="Etc marker" />,
    },
  };
};
