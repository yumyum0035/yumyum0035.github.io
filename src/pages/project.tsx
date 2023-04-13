import "./project.css";
import { Link, useLocation } from "react-router-dom";
import Sketchfab from "../components/sketchfab";

interface Project {
  key?: string;
  comment?: string;
  thumbnail?: string;
  title: string;
  sketchfabSrc: string;
}

const Project = () => {
  const location = useLocation();
  const propsData = location.state;

  return (
    <article>
      <h2>{propsData.title}</h2>
      <Sketchfab src={propsData.sketchfabSrc} title={propsData.title} />
      <p>{propsData.comment}</p>

      <section>
        <Link to={"/3D-art"}>Return to 3D arts</Link>
      </section>
    </article>
  );
};

export default Project;
