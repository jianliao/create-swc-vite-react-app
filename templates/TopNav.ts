import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/top-nav/sp-top-nav.js';
import '@spectrum-web-components/top-nav/sp-top-nav-item.js';

import { 
    TopNav as SpTopNav, 
    TopNavItem as SpTopNavItem 
} from '@spectrum-web-components/top-nav';

export const TopNav = "sp-top-nav" as unknown as FC<ReactComponentProps & Omit<Partial<SpTopNav>, 'style' | 'children'> & HTMLAttributes<SpTopNav>>;
export const TopNavItem = "sp-top-nav-item" as unknown as FC<ReactComponentProps & Omit<Partial<SpTopNavItem>, 'style' | 'children'> & HTMLAttributes<SpTopNavItem>>; 