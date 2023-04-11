import { Link } from "react-router-dom";
import "./footer.css";
import KofiButton from "./ko-fi-button";
import IconLink from "./icon-link";

interface Icon {
  url: string;
  title: string;
  src: string;
}

const Footer = () => {
  const links: Icon[] = [
    {
      url: "https://twitter.com/yuumi0035",
      title: "twitter",
      src: "https://img.icons8.com/ios/256/twitter.png",
    },
    {
      url: "https://twitch.tv/yuumi0035",
      title: "twitch",
      src: "https://img.icons8.com/ios/256/twitch.png",
    },
  ];

  return (
    <footer>
      <p>
        Coded with ❤️ by <Link to="about">Yuumi</Link>.
      </p>
      {links.map((link) => (
        <IconLink
          link={link.url}
          title={link.title}
          src={link.src}
          key={link.title}
        />
      ))}
      <KofiButton message="Buy me a ko-fi?" />
    </footer>
  );
};

export default Footer;
