import { Link } from "react-router-dom";
import "./footer.css";
import KofiButton from "./ko-fi-button";

const Footer = () => {
  return (
    <footer>
      <p>
        Coded with ❤️ by Yuumi. More information <Link to="about">here</Link>
      </p>
      <KofiButton message="Buy me a ko-fi?" />
    </footer>
  );
};

export default Footer;
