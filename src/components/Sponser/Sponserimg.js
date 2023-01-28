import { sponserImg } from "../../Data";

const Sponserimg = () => {
  const sImg = sponserImg.map((items) => {
    const { id, simg, salt } = items;
    return (
      <div className="sImg" key={id}>
        <img src={simg} alt={salt} />
      </div>
    );
  });
  return sImg;
};

export default Sponserimg;
