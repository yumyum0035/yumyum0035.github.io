import { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

interface PageInfo {
  url: string;
  title: string;
}

//TODO: hamburger menu! I want it like that yesyes

const Navigation = () => {
  const [toggle, setToggle] = useState(false); //hamburger menu toggle

  const pages: PageInfo[] = [
    { url: "/", title: "home" },
    { url: "about", title: "about" },
    { url: "commission-info", title: "commission info" },
  ];

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="nav">
      <nav>
        {pages.map((page) => (
          <Link to={page.url} key={page.title}>
            {page.title}
          </Link>
        ))}
      </nav>
    </div>
  );

  // if (toggle) {
  //   return (
  //     <div className="nav">
  //       <button onClick={handleToggle}>close nav</button>
  //       <nav>
  //         {pages.map((page) => (
  //           <Link to={page.url} key={page.title}>
  //             {page.title}
  //           </Link>
  //         ))}
  //       </nav>
  //     </div>
  //   );
  // } else {
  //   return <button onClick={handleToggle}>open nav</button>;
  // }
};

export default Navigation;
