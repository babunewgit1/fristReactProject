import Heading from "../Heading/Heading";
import Sponserimg from "./Sponserimg";
import "./Sponser.css";

const Sponser = () => {
  return (
    <section id="sponser">
      <div className="container">
        <div className="sponserHeading text-center">
          <h3>
            <Heading head="Our Sponspors" />
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but{" "}
            <br />
            the majority have suffered alteration.
          </p>
        </div>
        <div className="sponserImages">
          <Sponserimg />
        </div>
      </div>
    </section>
  );
};

export default Sponser;
