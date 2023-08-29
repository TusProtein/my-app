import Tippy from "@tippyjs/react/headless";
import { Children, useState } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import MenuItem from "./MenuItem";
import style from "./Menu.module.css";

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => (
      <div className={`${style.menuItem} flex`}>
        <MenuItem key={index} data={item} />
      </div>
    ));
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="menuIcon w-[224px]" tabIndex="-1" {...attrs}>
          <PopperWrapper className="pb-2">{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
