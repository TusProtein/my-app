import PropTypes from "prop-types";
import AccountItem from "./AccountItem";

function SuggestAccounts({ label }) {
  return (
    <>
      <div className="text-[14px] font-semibold text-[#161823bf] mb-3">
        <div
          style={{
            border: ".5px solid #1618231f",
            margin: "8px 0",
          }}
        ></div>

        {label}
      </div>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <div className="text-[14px] text-[#fe2c55] cursor-pointer mt-2">
        See all
      </div>
    </>
  );
}

SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
