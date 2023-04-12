import { useState } from "react";
import "./gallery.css";
import Modal from "../components/modal";

interface Image {
  key?: string;
  src: string;
  comment?: string;
}

interface GalleryElement {
  content: Image[];
}

const Gallery = ({ content }: GalleryElement) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState<Image>({ src: "", comment: "" });

  const handleShow = (image: Image) => {
    setShow((prev) => !prev);
    setImage(image);
  };

  return (
    <article className="gallery">
      {content.map((image) => (
        <div className="gallery-item" key={image.key}>
          <img
            src={image.src}
            alt=""
            onClick={() =>
              handleShow({ src: image.src, comment: image.comment })
            }
          />
        </div>
      ))}
      {show && (
        <Modal show={show} setShow={setShow}>
          <img className="modal-image" src={image.src} alt="" />
          {image.comment !== "" && (
            <p className="modal-text">{image.comment}</p>
          )}
        </Modal>
      )}
    </article>
  );
};

export default Gallery;
