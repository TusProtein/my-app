import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
function MenuItem({ icon, title, to }) {
  return (
    <NavLink
      className="flex items-center gap-x-2 font-bold tracking-[-0.028px] p-2 hover:bg-[#16182308] rounded-[4px]"
      style={({ isActive }) => {
        return {
          color: isActive ? "#fe2c55" : "#161823",
          fill: isActive ? "#fe2c55" : "#161823",
          transition: "background ease-in-out 200ms",
        };
      }}
      to={to}
    >
      {icon}
      <span className="text-[18px]">{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
