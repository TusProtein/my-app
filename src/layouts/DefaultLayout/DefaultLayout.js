import PropTypes from "prop-types";
import Header from "~/layouts/components/Header/Header";
import Sidebar from "./Sidebar/Sidebar.js";
import style from "~/components/Style/style.module.css";
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div id="container" className="w-full flex justify-center">
        <div className={`${style.defaultLayoutWidth} flex px-6 mt-[60px]`}>
          <Sidebar />
          <div id="content" className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
