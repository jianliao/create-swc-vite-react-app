import "./Sidebar.css";

import { ActionGroup, ActionButton } from "@core-ui-components";
import {
  HomeIcon,
  DiscoverIcon,
  PluginIcon,
  FolderIcon,
  BrandIcon,
  CalendarIcon,
  LightbulbIcon,
} from "@core-ui-icons";

export const Sidebar = () => {
  return (
    <nav className="sidenav">
      <ActionGroup vertical quiet size="xl">
        <ActionButton value="home">
          <HomeIcon slot="icon" />
        </ActionButton>
        <ActionButton value="files">
          <FolderIcon slot="icon" />
        </ActionButton>
        <ActionButton value="brands">
          <BrandIcon slot="icon" />
        </ActionButton>
        <ActionButton value="discover">
          <DiscoverIcon slot="icon" />
        </ActionButton>
        <ActionButton value="schedule">
          <CalendarIcon slot="icon" />
        </ActionButton>
        <ActionButton value="learn">
          <LightbulbIcon slot="icon" />
        </ActionButton>
        <ActionButton value="plugins">
          <PluginIcon slot="icon" />
        </ActionButton>
      </ActionGroup>
    </nav>
  );
};

export default Sidebar;
