import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/tray/sp-tray.js';

import { Tray as SpTray } from '@spectrum-web-components/tray';

export const Tray = "sp-tray" as unknown as FC<ReactComponentProps & Omit<Partial<SpTray>, 'style' | 'children'> & HTMLAttributes<SpTray>>; 