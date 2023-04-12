import "./sketchfab.css";

interface Prop {
  title: string;
  src: string;
}

const Sketchfab = (props: Prop) => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Link - Breath of the Wild"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src={props.src}
      ></iframe>
    </div>
  );
};

export default Sketchfab;
