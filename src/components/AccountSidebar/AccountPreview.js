import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

function AccountPreview() {
  return (
    <div className="py-3 px-5 w-[320px] text-[#161823]">
      <div className="flex justify-between items-center">
        <img
          className="w-[44px] h-[44px] aspect-[4/3] rounded-[50%]"
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/08af8ee44c1da9a020886aafe56fad23~c5_100x100.jpeg?x-expires=1693036800&x-signature=dtm86Sp9%2Fd9KDfvRDEk1U4Poefs%3D"
          alt=""
        />
        <Button
          style={{
            height: 34,
            paddingLeft: 30,
            paddingRight: 30,
          }}
          primary
        >
          Follow
        </Button>
      </div>
      <div className="flex-1 my-3">
        <div className="flex gap-x-1">
          <span className="username text-[16px]">Mai Anh Tú</span>
          <FontAwesomeIcon
            style={{
              color: "#20D5EC",
            }}
            icon={faCheckCircle}
          />
        </div>
        <p className="nickname text-[14px] font-medium text-[#161823bf]">
          tus.protein
        </p>
      </div>
      <div className="flex gap-x-4">
        <div className="flex gap-x-1">
          <span>6.7M</span>
          <p className="text-[#161823bf] font-medium">Followers</p>
        </div>
        <div className="flex gap-x-1">
          <span>6.7M</span>
          <p className="text-[#161823bf] font-medium">Likes</p>
        </div>
      </div>
    </div>
  );
}

export default AccountPreview;
