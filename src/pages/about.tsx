import Social from "../components/social";
import "./about.css";

interface LinkInfo {
  url: string;
  title: string;
  note?: string;
  src: string;
}

//page showing links like linktree i guess I'm no longer sure of the footer
const About = () => {
  const links: LinkInfo[] = [
    {
      url: "https://twitter.com/yuumi0035",
      title: "twitter",
      src: "https://img.icons8.com/ios/256/twitter.png",
    },
    {
      url: "https://twitter.com/nightmare0break",
      title: "twitter FFXIV",
      src: "https://img.icons8.com/ios/256/twitter.png",
      note: "shitpost and some draws goes here",
    },
    {
      url: "https://artstation.com/yuumi",
      title: "artstation",
      src: "https://img.icons8.com/ios/256/drawing--v2.png",
    },
    {
      url: "https://twitch.tv/yuumi0035",
      title: "twitch",
      src: "https://img.icons8.com/ios/256/twitch.png",
    },
    {
      url: "https://ko-fi.com/yuumi0035",
      title: "ko-fi",
      src: "https://img.icons8.com/ios/256/cafe.png",
    },
    {
      url: "https://yuumi0035.tumblr.com/tagged/ym0035art",
      title: "tumblr",
      note: "almost all Miraculous Ladybug art",
      src: "https://img.icons8.com/ios/256/tumblr.png",
    },
    {
      url: "https://instagram.com/yuumi0035",
      title: "instagram",
      note: "Miraculous Ladybug art only",
      src: "https://img.icons8.com/ios/256/instagram-new.png",
    },
  ];
  return (
    <div>
      <span>( ´ ▽ ` )ﾉ</span>

      <h2>Hello! I'm Yuumi!</h2>
      <p>
        I'm a 2D and 3D artist generalist, looking to go from Jack of all trades
        to Master of One. (or maybe Two).
      </p>
      <p>
        I draw illustrations, make videogame art and I'm also a front-end
        developer. This website was coded by me using React and Vite, if you're
        wondering why I chose a github domain 👌👌👌.
      </p>
      <p>
        I love Final Fantasy, cozy games and currently I spent more time than I
        should playing Minecraft and Overwatch 2😂
      </p>
      <p>
        Here are my socials where you can find more of my works and also my
        interests:
      </p>

      <div className="social-container">
        {links.map((link) => (
          <Social
            key={link.title}
            url={link.url}
            title={link.title}
            note={link.note}
            src={link.src}
          ></Social>
        ))}
      </div>
    </div>
  );
};

export default About;
