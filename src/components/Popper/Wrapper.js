function Wrapper({ children }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // maxHeight: "min((100vh - 96px) - 60px, 760px)",
        paddingTop: "8px",
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

export default Wrapper;
