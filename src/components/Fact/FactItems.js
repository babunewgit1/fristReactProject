import { FactData } from "../../Data";

import React from "react";

const FactItems = () => {
  const factSingle = FactData.map((items) => {
    const { id, fimg, number, fpera } = items;
    return (
      <div className="factOne" key={id}>
        <img src={fimg} alt="images not found" />
        <h3>{number}</h3>
        <p>{fpera}</p>
      </div>
    );
  });

  return <div className="fact-wrapper">{factSingle}</div>;
};

export default FactItems;
