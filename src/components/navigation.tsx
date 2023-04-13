import { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

interface PageInfo {
  url: string;
  title: string;
}

const Navigation = () => {
  const pages: PageInfo[] = [
    { url: "/", title: "home" },
    { url: "about", title: "about" },
    { url: "commission-info", title: "commission info" },
  ];

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
};

export default Navigation;
