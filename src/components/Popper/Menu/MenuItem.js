import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";

function MenuItem({ data, onClick }) {
  return (
    <Button
      onClick={onClick}
      style={{
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

export default MenuItem;
