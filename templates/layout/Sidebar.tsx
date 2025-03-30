import './Sidebar.css';

import { ActionGroup, ActionButton } from '@components';
import { HomeIcon } from '@components/icons/HomeIcon';
import { DiscoverIcon } from '@components/icons/DiscoverIcon';
import { PluginIcon } from '@components/icons/PluginIcon';
import { FolderIcon } from '@components/icons/FolderIcon';
import { BrandIcon } from '@components/icons/BrandIcon';
import { CalendarIcon } from '@components/icons/CalendarIcon';
import { LightbulbIcon } from '@components/icons/LightbulbIcon';

export const Sidebar = () => {
  return (
    <nav className="sidenav">
      <ActionGroup
        vertical
        quiet
        size="xl"
      >
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
