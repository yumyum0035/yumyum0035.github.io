import "./project.css";
import { useLocation } from "react-router-dom";
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
    </article>
  );
};

export default Project;
