import { Link } from "react-router-dom";
import "./home-banner.css";

interface HomeItem {
  class: string;
  itemKey: string;
  src: string;
  title: string;
  url: string;
}

const HomeBanner = (props: HomeItem) => {
  return (
    <Link to={props.url} className="banner" key={props.itemKey}>
      <div className="img-box">
        <img className={props.class} src={props.src} alt={props.title} />
      </div>
      <p className="banner-title">{props.title}</p>
    </Link>
  );
};

export default HomeBanner;
