import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Image from "../Image";

function AccountItem({ data }) {
  return (
    <Link
      to={`/:${data.nickname}`}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
      }}
      className="wrapper flex items-center gap-x-2 hover:bg-gray-100"
    >
      <Image
        className="w-[40px] h-[40px] object-cover rounded-[50%]"
        src={data.avatar}
        alt="avatar"
      />
      <div className="info flex flex-col gap-y-1">
        <div className="username flex gap-x-1.5">
          <span
            style={{
              color: "rgba(22, 24, 35, 1)",
            }}
            className="name font-semibold"
          >
            {" "}
            {data.full_name}
          </span>
          <div>
            {data.tick && (
              <FontAwesomeIcon
                style={{
                  color: "rgb(32, 213, 236)",
                  fontSize: ".9rem",
                }}
                icon={faCircleCheck}
              />
            )}
          </div>
        </div>
        <span
          style={{
            color: "rgba(22, 24, 35, 0.5)",
          }}
          className="nickname text-[14px] flex justify-start"
        >
          {data.nickname}
        </span>
      </div>
    </Link>
  );
}

export default AccountItem;
