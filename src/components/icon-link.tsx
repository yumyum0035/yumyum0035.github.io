import "./icon-link.css";

interface Icon {
  link: string;
  title: string;
  src: string;
}

const IconLink = (props: Icon) => {
  return (
    <a className="icon-link" href={props.link} target="_blank">
      <img src={props.src} alt={props.title} />
    </a>
  );
};

export default IconLink;
