import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AccountItem() {
  return (
    <div
      style={{
        padding: "9px 16px",
        cursor: "pointer",
      }}
      className="wrapper flex items-center gap-x-2 hover:bg-gray-100"
    >
      <img
        className="w-[40px] h-[40px] object-cover"
        src={
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/08af8ee44c1da9a020886aafe56fad23~c5_100x100.jpeg?x-expires=1693036800&x-signature=dtm86Sp9%2Fd9KDfvRDEk1U4Poefs%3D"
        }
        alt="avatar"
      />
      <div className="info flex flex-col gap-y-0.5">
        <p className="nickname flex gap-x-1.5">
          <span
            style={{
              color: "rgba(22, 24, 35, 1)",
            }}
            className="name font-semibold"
          >
            {" "}
            Mai Anh Tu
          </span>
          <div>
            <FontAwesomeIcon
              style={{
                color: "rgb(32, 213, 236)",
                fontSize: ".9rem",
              }}
              icon={faCircleCheck}
            />
          </div>
        </p>
        <span
          style={{
            color: "rgba(22, 24, 35, 0.5)",
          }}
          className="userName text-[14px] flex justify-start"
        >
          tusprotein
        </span>
      </div>
    </div>
  );
}

export default AccountItem;
