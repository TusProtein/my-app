import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";

import PopperWrapper from "~/components/Popper/Wrapper";
import AccountPreview from "./AccountPreview";

function AccountItem() {
  const renderPreview = (attrs) => {
    return (
      <div className="bg-white rounded-lg" tabIndex="-1" {...attrs}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <>
      <div>
        <Tippy
          placement="bottom"
          offset={[-20, 0]}
          interactive
          delay={[800, 0]}
          render={renderPreview}
        >
          <div className="flex gap-x-2 py-2 px-3 cursor-pointer hover:bg-[#16182308]">
            <img
              className="w-[32px] h-[32px] aspect-[4/3] rounded-[50%]"
              src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/08af8ee44c1da9a020886aafe56fad23~c5_100x100.jpeg?x-expires=1693036800&x-signature=dtm86Sp9%2Fd9KDfvRDEk1U4Poefs%3D"
              alt=""
            />
            <div className="flex-1">
              <div className="flex gap-x-1">
                <span className="username text-[14px] text-[#161823]">
                  Mai Anh Tú
                </span>
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
          </div>
        </Tippy>
      </div>
    </>
  );
}

export default AccountItem;
