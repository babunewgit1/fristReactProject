import Loveblock from "./Loveblock";
import Loveheading from "./Loveheading";
import gril from "../../Images/girls.png";
import "../Love/love.css";

const Love = () => {
  return (
    <section id="love">
      <div className="container">
        <div className="love-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="love-left-wrapper">
                <Loveheading />
                <Loveblock />
              </div>
            </div>
            <div className="col-md-6">
              <div className="love-right">
                <img className="w-100 d-block" src={gril} alt="girl images" />
                <div className="loveYear text-center text-white">
                  <h3>10+Year</h3>
                  <span>Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Love;
