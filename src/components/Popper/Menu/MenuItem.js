import Button from "~/components/Button";

function MenuItem({ data }) {
  return (
    <Button
      style={{
        width: "100%",
        padding: "15px 16px",
      }}
      to={data.to}
    >
      <div className="flex gap-x-2">
        <div className="w-[20px] text-center">{data.icon}</div>
        <div className="font-semibold">{data.title}</div>
      </div>
    </Button>
  );
}

export default MenuItem;
