import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar/index.js";
import style from "~/components/Style/style.module.css";
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div id="container" className="w-full flex justify-center">
        <div className={`${style.defaultLayoutWidth} flex px-6`}>
          <Sidebar />
          <div id="content" className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
