import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/action-menu/sp-action-menu.js';

import { ActionMenu as SpActionMenu } from '@spectrum-web-components/action-menu';

export const ActionMenu = "sp-action-menu" as unknown as FC<ReactComponentProps & Omit<Partial<SpActionMenu>, 'style' | 'children'> & HTMLAttributes<SpActionMenu>>; 