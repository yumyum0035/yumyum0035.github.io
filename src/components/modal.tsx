import { ReactNode } from "react";
import "./modal.css";

interface Props {
  children: ReactNode;
  show: boolean;
  setShow: (state: boolean) => void;
}

const Modal = ({ children, show, setShow }: Props) => {
  const handleClose = () => setShow(false);

  if (!show) {
    return null;
  } else {
    return (
      <div className="modal">
        <button className="close-modal" onClick={handleClose}>
          ×
        </button>
        {children}
      </div>
    );
  }
};

export default Modal;
