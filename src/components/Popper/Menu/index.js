import Tippy from "@tippyjs/react/headless";
import { Children, useState } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import MenuItem from "./MenuItem";
import style from "./Menu.module.css";
import HeaderMenu from "./HeaderMenu";

function Menu({ children, items = [], onChangeItem = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const lastMenu = history[history.length - 1];

  const renderItems = () => {
    return lastMenu.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <div key={index} className={`${style.menuItem} flex`}>
          <MenuItem
            data={item}
            onClick={() => {
              if (isParent) {
                setHistory((prev) => [...prev, item.children]);
              } else {
                onChangeItem(item);
              }
            }}
          />
        </div>
      );
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="menuIcon w-[224px]" tabIndex="-1" {...attrs}>
          <PopperWrapper className="pb-2">
            {history.length > 1 && (
              <HeaderMenu
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
