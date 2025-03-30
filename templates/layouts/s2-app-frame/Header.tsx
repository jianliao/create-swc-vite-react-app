import "./Header.css";
import {
  ActionButton,
  Search,
  Picker,
  MenuItem,
  ActionGroup,
  Avatar,
  Divider,
} from "@core-ui-components";

import {
  MenuHamburgerIcon,
  SpectrumlogoIcon,
  BellIcon,
  AppsAllIcon,
  HelpCircleIcon,
} from "@core-ui-icons";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-group">
        <ActionButton aria-label="Toggle navigation" quiet size="xl">
          <MenuHamburgerIcon slot="icon" />
        </ActionButton>

        <a href="/" className="header-logo">
          <SpectrumlogoIcon size="xxl" />
          <span>Product name</span>
        </a>
      </div>

      <div className="header-search">
        <Search style={{ width: "60%" }} placeholder="Search" />
      </div>

      <div className="header-group">
        <Picker quiet value="item-1">
          <MenuItem selected value="item-1">
            Plans & products
          </MenuItem>
          <MenuItem value="item-2">Premium</MenuItem>
          <MenuItem value="item-3">Support</MenuItem>
        </Picker>
        <Divider
          vertical
          size="s"
          style={{ alignSelf: "stretch", height: "auto" }}
        />
        <ActionGroup quiet size="xl">
          <ActionButton aria-label="Help">
            <HelpCircleIcon slot="icon" />
          </ActionButton>
          <ActionButton aria-label="Notifications">
            <BellIcon slot="icon" />
          </ActionButton>
          <ActionButton aria-label="Apps">
            <AppsAllIcon slot="icon" />
          </ActionButton>
        </ActionGroup>
        <Avatar
          label="demo user"
          size={500}
          src="https://picsum.photos/500/500"
        />
      </div>
    </header>
  );
};

export default Header;
