import { navLink } from "../../Data";
const Nav = (props) => {
  const items = navLink.map((items) => {
    const { id, link, text } = items;
    return (
      <li key={id}>
        <a className={props.text} href={link}>
          {text}
        </a>
      </li>
    );
  });

  return <ul id="navbars">{items}</ul>;
};

export default Nav;
