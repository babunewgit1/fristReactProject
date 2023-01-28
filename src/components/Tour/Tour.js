import Heading from "../Heading/Heading";
import { tours } from "../../Data";
import Tours from "./Tours";
import "./Tour.css";

const Tour = () => {
  return (
    <section id="tour">
      <div className="container">
        <div className="tour-heading text-center">
          <h3>
            <Heading head="Featured Tours" />
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but{" "}
            <br />
            the majority have suffered alteration.
          </p>
        </div>
        <div className="tourPlace">
          {tours.map((items) => {
            return <Tours {...items} key={items.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tour;
