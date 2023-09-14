import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";
import styles from "./Menu.module.css";

function MenuItem({ data, onClick }) {
  return (
    <Button
      className={data.border ? `${styles.border}` : ""}
      onClick={onClick}
      style={{
        color: "rgb(22, 24, 35)",
        width: "100%",
        padding: "12px 16px",
        display: "flex",
        columnGap: "8px",
      }}
      iconLeft={data.icon}
      to={data.to}
    >
      <div className="font-semibold">{data.title}</div>
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
