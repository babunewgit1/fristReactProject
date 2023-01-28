import FactItems from "./FactItems";
import "./Fact.css";
import Heading from "../Heading/Heading";

const Fact = () => {
  return (
    <section id="fact">
      <div className="container">
        <div className="factHeading">
          <h2>
            <Heading head="Some Facts" />
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but{" "}
            <br />
            the majority have suffered alteration.
          </p>
        </div>
        <FactItems />
      </div>
    </section>
  );
};

export default Fact;
