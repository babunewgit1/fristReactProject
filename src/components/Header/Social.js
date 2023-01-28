import { Social } from "../../Data";

const Socialicon = (props) => {
  const sociaLink = Social.map((items) => {
    const { id, link, icon } = items;
    return (
      <li key={id}>
        <a className={props.text} href={link}>
          <i className={icon}></i>
        </a>
      </li>
    );
  });
  return <ul id="social">{sociaLink}</ul>;
};

export default Socialicon;
