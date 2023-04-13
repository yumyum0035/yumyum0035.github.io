import "./commission-info.css";

const CommissionInfo = () => {
  //TODO: get this info from firebase, maybe
  return (
    <div>
      <h2>Commission Info</h2>
      <p>Currently the commissions offered are:</p>
      <ul>
        <li>
          <a href="#discordStickers">Discord Stickers</a>
        </li>
        <li>
          <a href="#ff14char">FFXIV character</a>
        </li>
        <li>Other types of commissions will be available soon.</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, cumque?
        Aliquid accusamus culpa eius placeat quaerat! Similique qui temporibus
        ab sit sapiente eum blanditiis maxime consequuntur. Laudantium ipsa
        harum sunt.
      </p>
      <h3 id="discordStickers">Discord Stickers</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, cumque?
        Aliquid accusamus culpa eius placeat quaerat! Similique qui temporibus
        ab sit sapiente eum blanditiis maxime consequuntur. Laudantium ipsa
        harum sunt.
      </p>
      <h3 id="ff14char">FFXIV Character</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, cumque?
        Aliquid accusamus culpa eius placeat quaerat! Similique qui temporibus
        ab sit sapiente eum blanditiis maxime consequuntur. Laudantium ipsa
        harum sunt.
      </p>
    </div>
  );
};

export default CommissionInfo;
