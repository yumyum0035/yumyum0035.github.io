import { useState } from "react";
import "./art2D.css";
import Modal from "../components/modal";

interface Image {
  key?: string;
  src: string;
  comment?: string;
}

const Art2D = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState<Image>({ src: "", comment: "" });
  const images: Image[] = [
    {
      key: "001",
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b10af631-0f59-4cff-9272-5d86ccec0e39/dfu4nez-11f26872-3688-499d-9f03-0fc126132bd9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMGFmNjMxLTBmNTktNGNmZi05MjcyLTVkODZjY2VjMGUzOVwvZGZ1NG5lei0xMWYyNjg3Mi0zNjg4LTQ5OWQtOWYwMy0wZmMxMjYxMzJiZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YFc99f8A7czQjSGKvQnL1y4bT94q_r5a7SyxDtoTIqI",
      comment: "Kaoru in a kimono for HH 10th anniversary",
    },
    {
      key: "002",
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b10af631-0f59-4cff-9272-5d86ccec0e39/dfu5605-e9b4ec56-2d18-442d-9c85-9fd390e5fb2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMGFmNjMxLTBmNTktNGNmZi05MjcyLTVkODZjY2VjMGUzOVwvZGZ1NTYwNS1lOWI0ZWM1Ni0yZDE4LTQ0MmQtOWM4NS05ZmQzOTBlNWZiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w15I3ozRINgusEqJhJvzc4OEtvY6nh4CAIDFWMb3Rhs",
    },
    {
      key: "003",
      src: "https://64.media.tumblr.com/b638b4e9d6e1cee87214a07d6762a3c2/2fe52e5a699bcf4f-17/s640x960/017a6b7f4b432e766e7c58b0ecb175fb72914ebf.png",
    },
    {
      comment: "Final Fantasy XIV commission for Mako Nayhael",
      key: "004",
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b10af631-0f59-4cff-9272-5d86ccec0e39/dfu7eek-fd8ff992-04c7-4a94-803b-4b012bda400d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMGFmNjMxLTBmNTktNGNmZi05MjcyLTVkODZjY2VjMGUzOVwvZGZ1N2Vlay1mZDhmZjk5Mi0wNGM3LTRhOTQtODAzYi00YjAxMmJkYTQwMGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oTApyCsa2gH-fcqBb57Suq8iUGtqh53A87gewIB94cE",
    },
    {
      comment: "Final Fantasy XIV commission for King Pendragon",
      key: "005",
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b10af631-0f59-4cff-9272-5d86ccec0e39/dfu7eeh-63338fac-191c-47d9-9d87-f6b4c2229f20.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMGFmNjMxLTBmNTktNGNmZi05MjcyLTVkODZjY2VjMGUzOVwvZGZ1N2VlaC02MzMzOGZhYy0xOTFjLTQ3ZDktOWQ4Ny1mNmI0YzIyMjlmMjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-E1rbKexYvrDxwyld8bqor4l7j0ChuhdMu3PvORvOdU",
    },
    /* sample
    {
      key: "",
      src: ""
    }
    */
  ];

  const handleShow = (image: Image) => {
    setShow((prev) => !prev);
    setImage(image);
  };

  return (
    <section>
      <h2>2D art</h2>
      <article className="gallery">
        {images.map((image) => (
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
    </section>
  );
};

export default Art2D;
