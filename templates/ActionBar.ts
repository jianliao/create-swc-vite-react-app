import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/action-bar/sp-action-bar.js';

import { ActionBar as SpActionBar } from '@spectrum-web-components/action-bar';


export const ActionBar = "sp-action-bar" as unknown as FC<ReactComponentProps & Omit<Partial<SpActionBar>, 'style' | 'children'> & HTMLAttributes<SpActionBar>>;
