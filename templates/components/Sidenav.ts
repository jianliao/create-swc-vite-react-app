import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/sidenav/sp-sidenav.js';
import '@spectrum-web-components/sidenav/sp-sidenav-item.js';
import '@spectrum-web-components/sidenav/sp-sidenav-heading.js';

import { SideNav as SpSideNav, SideNavItem as SpSideNavItem, SideNavHeading as SpSideNavHeading } from '@spectrum-web-components/sidenav';

export const SideNav = "sp-sidenav" as unknown as FC<ReactComponentProps & Omit<Partial<SpSideNav>, 'style' | 'children'> & HTMLAttributes<SpSideNav>>;
export const SideNavItem = "sp-sidenav-item" as unknown as FC<ReactComponentProps & Omit<Partial<SpSideNavItem>, 'style' | 'children'> & HTMLAttributes<SpSideNavItem>>;
export const SideNavHeading = "sp-sidenav-heading" as unknown as FC<ReactComponentProps & Omit<Partial<SpSideNavHeading>, 'style' | 'children'> & HTMLAttributes<SpSideNavHeading>>; 