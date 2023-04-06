import "./social.css";

interface LinkInfo {
  url: string;
  title: string;
  note?: string;
  src: string;
}

const Social = (link: LinkInfo) => {
  return (
    <div key={link.title}>
      <div className="social">
        <img src={link.src} alt={link.title} />
        <p>
          <a href={link.url} target="_blank">
            {link.title}
          </a>
        </p>
      </div>
      {link.note && (
        <p className="link-note">
          <span>👆🌸 note:</span> {link.note} 🌸
        </p>
      )}
    </div>
  );
};

export default Social;
