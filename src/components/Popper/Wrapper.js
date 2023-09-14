import PropTypes from "prop-types";

function Wrapper({ children, className }) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "min((100vh - 96px) - 60px, 760px)",
        padding: "8px 0",
        background: "rgb(255, 255, 255)",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 12px",
        borderRadius: "8px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Wrapper;
