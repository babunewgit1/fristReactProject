import { loveHeading } from "../../Data";

const Loveheading = () => {
  const lovehead = loveHeading.map((items) => {
    const { id, mainheading, subheading } = items;
    return (
      <div className="love-left" key={id}>
        <h3>{mainheading}</h3>
        <p>{subheading}</p>
      </div>
    );
  });
  return lovehead;
};

export default Loveheading;
