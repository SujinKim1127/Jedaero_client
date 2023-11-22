import { useSetRecoilState } from "recoil";
import modalState from "../atoms/modalState";

export const useModal = () => {
  const setModalOpen = useSetRecoilState(modalState);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return { openModal, closeModal };
};
