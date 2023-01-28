import "../Bannar/Bannar.css";
import Heading from "../Heading/Heading";

const Bannar = () => {
  return (
    <section id="bannar">
      <div className="container">
        <div className="bannarwraper text-center text-white">
          <h2>
            <Heading head="Brand New Group of Architects" />
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in <br /> some form, by
            injected humour, or randomised words which don't look even
          </p>
          <a href="#">Explore More</a>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
