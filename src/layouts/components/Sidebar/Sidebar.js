import SuggestAccounts from "~/components/\bSuggestAccounts/\bSuggestAccounts";
import { IconHome, IconLive, IconUserGroup } from "~/components/Icons";
import config from "~/config";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

function Sidebar() {
  return (
    <>
      <h1 id="sidebar" className="w-[352px] min-h-[1000px] pt-5 pb-[26px]">
        <Menu>
          <MenuItem
            icon={<IconHome />}
            title={"For you"}
            to={config.routes.home}
          />
          <MenuItem
            icon={<IconUserGroup />}
            title={"Following"}
            to={config.routes.following}
          />
          <MenuItem
            icon={<IconLive />}
            title={"LIVE"}
            to={config.routes.live}
          />
        </Menu>
        <SuggestAccounts label="Suggested accounts" />
        {/* <SuggestAccounts label="Following accounts" /> */}
      </h1>
    </>
  );
}

export default Sidebar;
