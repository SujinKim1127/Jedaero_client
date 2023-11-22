import { atom } from "recoil";


if (!global._recoilAtoms) {
  global._recoilAtoms = {};
}

export const modalState =
  global._recoilAtoms.modalState ||
  atom({
    key: "modalState",
    default: false,
  });

global._recoilAtoms.modalState = modalState;

