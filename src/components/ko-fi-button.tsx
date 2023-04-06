import "./ko-fi-button.css";
import Kofi from "../assets/ko-fi.svg";

//typescript Prop sample
interface Prop {
  message: string;
}

const KofiButton = (props: Prop) => {
  return (
    <a href="https://ko-fi.com/yuumi0035" target="_blank">
      <button className="ko-fi">
        <img src={Kofi} alt="Ko-fi donations" />
        {props.message}
      </button>
    </a>
  );
};

export default KofiButton;
