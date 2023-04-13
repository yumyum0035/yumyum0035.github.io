import { Link, Params, redirect, useParams } from "react-router-dom";
import "./projects.css";

interface Project {
  key?: string;
  comment?: string;
  thumbnail?: string;
  title: string;
  sketchfabSrc: string;
}

const Projects = () => {
  //TODO: grab these from firebase?
  const projects: Project[] = [
    {
      thumbnail:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b10af631-0f59-4cff-9272-5d86ccec0e39/dfu7pt7-5ef1276b-0903-46f9-a4ea-a7d4f1f46996.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMGFmNjMxLTBmNTktNGNmZi05MjcyLTVkODZjY2VjMGUzOVwvZGZ1N3B0Ny01ZWYxMjc2Yi0wOTAzLTQ2ZjktYTRlYS1hN2Q0ZjFmNDY5OTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3i-B7zQKlZgNvJDhe71UFHqvnb-inIodwCc4Ku5YhPY",
      comment: "3D character model of Link, from Breath of the Wild",
      key: "project-link",
      sketchfabSrc:
        "https://sketchfab.com/models/1fcf6e4097a1446095207b3787853c2b/embed",
      title: "Link - Breath of the Wild",
    },
    {
      thumbnail:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b10af631-0f59-4cff-9272-5d86ccec0e39/dfu7pta-0b0b8309-7094-452f-a2f1-fa7e0c4b3bd2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMGFmNjMxLTBmNTktNGNmZi05MjcyLTVkODZjY2VjMGUzOVwvZGZ1N3B0YS0wYjBiODMwOS03MDk0LTQ1MmYtYTJmMS1mYTdlMGM0YjNiZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I2DB7W3Zq4gOST_eaXvprghf9CqpLH0AGHWDZMIEuzA",
      comment:
        "Character modelling of Ladybug and Chat Noir, from Miraculous Ladybug",
      key: "project-lb",
      sketchfabSrc:
        "https://sketchfab.com/models/61977cf53a3a4744b96f3bd624d645f3/embed",
      title: "Miraculous Ladybug and Chat Noir",
    },
    {
      thumbnail:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b10af631-0f59-4cff-9272-5d86ccec0e39/dfu7ptc-92e50748-c0fd-4615-8f9a-6ff97a0afecb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMGFmNjMxLTBmNTktNGNmZi05MjcyLTVkODZjY2VjMGUzOVwvZGZ1N3B0Yy05MmU1MDc0OC1jMGZkLTQ2MTUtOGY5YS02ZmY5N2EwYWZlY2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hKWMO2I7AVAqAN5_bAS7MidnorScg3j0lTm_zsJMaK4",
      comment: "3D character model of Guybrush Threepwood, from Monkey Island",
      key: "project-guybrush",
      sketchfabSrc:
        "https://sketchfab.com/models/bbdd83ddb9714897b665d47b99202209/embed",
      title: "Guybrush Threepwood",
    },
  ];

  return (
    <article className="projects">
      {projects.map((project) => (
        <div className="project" key={project.key}>
          <Link to={`/3D-art/${project.key}`} state={project}>
            <img src={project.thumbnail} alt={project.title} />
          </Link>
        </div>
      ))}
    </article>
  );
};

export default Projects;
