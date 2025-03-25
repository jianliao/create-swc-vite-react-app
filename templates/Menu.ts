import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';

import { Menu as SpMenu, MenuGroup as SpMenuGroup, MenuItem as SpMenuItem, MenuDivider as SpMenuDivider } from '@spectrum-web-components/menu';

export const Menu = "sp-menu" as unknown as FC<ReactComponentProps & Omit<Partial<SpMenu>, 'style' | 'children'> & HTMLAttributes<SpMenu>>;
export const MenuGroup = "sp-menu-group" as unknown as FC<ReactComponentProps & Omit<Partial<SpMenuGroup>, 'style' | 'children'> & HTMLAttributes<SpMenuGroup>>;
export const MenuItem = "sp-menu-item" as unknown as FC<ReactComponentProps & Omit<Partial<SpMenuItem>, 'style' | 'children'> & HTMLAttributes<SpMenuItem>>;
export const MenuDivider = "sp-menu-divider" as unknown as FC<ReactComponentProps & Omit<Partial<SpMenuDivider>, 'style' | 'children'> & HTMLAttributes<SpMenuDivider>>;