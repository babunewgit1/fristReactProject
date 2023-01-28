import { loveItems } from "../../Data";

const Loveblock = () => {
  const loveSingle = loveItems.map((items) => {
    const { id, heading, para } = items;
    return (
      <div className="lovbitems" key={id}>
        <h6>{heading}</h6>
        <p>{para}</p>
      </div>
    );
  });

  return <div className="loveItemsBlock">{loveSingle}</div>;
};

export default Loveblock;
