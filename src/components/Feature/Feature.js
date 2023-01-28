import f1 from "../../Images/f1.png";
import f2 from "../../Images/f2.png";
import f3 from "../../Images/f3.png";
import f4 from "../../Images/f4.png";
import Feat from "./Feat";
import FeatureSingle from "./FeatureSingle";
import "../Feature/Feature.css";

const Feature = () => {
  return (
    <section id="feature">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="feature-left">
              <FeatureSingle img={f1} imgname="f1" />
              <FeatureSingle img={f2} imgname="f2" />
              <FeatureSingle img={f3} imgname="f3" />
              <FeatureSingle img={f4} imgname="f4" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-right ps-5">
              <Feat />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
