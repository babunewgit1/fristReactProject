import { Featurestxt } from "../../Data";

const Feat = () => {
  const featitems = Featurestxt.map((items) => {
    const { id, heading, para, buttonText } = items;
    return (
      <div className="featitems" key={id}>
        <h3>{heading}</h3>
        <p className="my-4">{para}</p>
        <button className="btn btn-warning text-white py-3 px-4">
          {buttonText}
        </button>
      </div>
    );
  });
  return featitems;
};

export default Feat;
