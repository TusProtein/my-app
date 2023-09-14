import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import { Children, useState } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import MenuItem from "./MenuItem";
import style from "./Menu.module.css";
import HeaderMenu from "./HeaderMenu";

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChangeItem = () => {},
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
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
    <div>
      <Tippy
        offset={[12, 2]}
        interactive
        hideOnClick={hideOnClick}
        onHide={() => setHistory((prev) => prev.slice(0, 1))}
        delay={[0, 700]}
        placement="bottom-end"
        render={(attrs) => (
          <div className="menuIcon w-[224px]" tabIndex="-1" {...attrs}>
            <PopperWrapper className="flex flex-col">
              {history.length > 1 && (
                <HeaderMenu
                  title={current.title}
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              )}
              <div className="overflow-y-auto">{renderItems()}</div>
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChangeItem: PropTypes.func,
};

export default Menu;
