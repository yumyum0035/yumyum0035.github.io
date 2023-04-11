import HomeBanner from "../components/home-banner";
import "./home.css";

interface Item {
  class: string;
  key: string;
  src: string;
  title: string;
  url: string;
}

/* TODO: media queries
 * 2D/3D gallery
 * website appearance
 * ipad appearance
 */

const Home = () => {
  const elements: Item[] = [
    {
      key: "3d",
      src: "https://cdnb.artstation.com/p/assets/images/images/059/522/499/large/coni-herrera-screenshot-2023-02-16-164959.jpg?1676562740",
      title: "3D art",
      url: "3D-art",
      class: "link",
    },
    {
      key: "2d",
      src: "https://cdna.artstation.com/p/assets/images/images/006/711/766/large/coni-herrera-houzukigamiremake.jpg?1500666887",
      title: "2D art",
      url: "2D-art",
      class: "natsume",
    },
    {
      key: "comms",
      src: "https://storage.ko-fi.com/cdn/useruploads/display/bbef7ccd-08da-45f6-bef4-6b7543ba7dc6_penny.png",
      title: "commission info",
      url: "commission-info",
      class: "penny",
    },
  ];

  return (
    <section>
      {elements.map((element) => {
        return (
          <HomeBanner
            key={element.key}
            itemKey={element.key}
            src={element.src}
            title={element.title}
            url={element.url}
            class={element.class}
          />
        );
      })}
    </section>
  );
};

export default Home;
