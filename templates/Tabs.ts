import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/tabs/sp-tabs.js';
import '@spectrum-web-components/tabs/sp-tabs-overflow.js';
import '@spectrum-web-components/tabs/sp-tab.js';
import '@spectrum-web-components/tabs/sp-tab-panel.js';

import { 
    Tabs as SpTabs, 
    Tab as SpTab, 
    TabPanel as SpTabPanel,
    TabsOverflow as SpTabsOverflow
} from '@spectrum-web-components/tabs';

export const Tabs = "sp-tabs" as unknown as FC<ReactComponentProps & Omit<Partial<SpTabs>, 'style' | 'children'> & HTMLAttributes<SpTabs>>;
export const Tab = "sp-tab" as unknown as FC<ReactComponentProps & Omit<Partial<SpTab>, 'style' | 'children'> & HTMLAttributes<SpTab>>;
export const TabPanel = "sp-tab-panel" as unknown as FC<ReactComponentProps & Omit<Partial<SpTabPanel>, 'style' | 'children'> & HTMLAttributes<SpTabPanel>>; 
export const TabsOverflow = "sp-tabs-overflow" as unknown as FC<ReactComponentProps & Omit<Partial<SpTabsOverflow>, 'style' | 'children'> & HTMLAttributes<SpTabsOverflow>>;