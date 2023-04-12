import Projects from "../components/projects";
import "./art3D.css";

interface Project {
  key?: string;
  src: string;
  comment?: string;
  url: string;
  thumbnail?: string;
}

const Art3D = () => {
  return (
    <div>
      <h2>3D art</h2>
      <Projects />
    </div>
  );
};

export default Art3D;
