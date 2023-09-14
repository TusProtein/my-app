import PropTypes from "prop-types";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderMenu({ title, onBack }) {
  return (
    <div className="h-[50px] relative flex justify-center items-center mt-[-8px] flex-shrink-0">
      <div onClick={onBack} className="absolute left-[10%] cursor-pointer">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <h4>{title}</h4>
    </div>
  );
}

HeaderMenu.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default HeaderMenu;
