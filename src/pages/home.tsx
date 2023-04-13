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
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b10af631-0f59-4cff-9272-5d86ccec0e39/dfu8fxw-f3712021-5968-456e-b9ca-a0c95ae8143d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMGFmNjMxLTBmNTktNGNmZi05MjcyLTVkODZjY2VjMGUzOVwvZGZ1OGZ4dy1mMzcxMjAyMS01OTY4LTQ1NmUtYjljYS1hMGM5NWFlODE0M2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Inq1Xk2pS6LomTmD01kQUCOmjLze37C4089kX6jOLfA",
      title: "commission info",
      url: "commission-info",
      class: "dolphin",
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
