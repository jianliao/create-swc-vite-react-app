import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/switch/sp-switch.js';

import { Switch as SpSwitch } from '@spectrum-web-components/switch';

export const Switch = "sp-switch" as unknown as FC<ReactComponentProps & Omit<Partial<SpSwitch>, 'style' | 'children'> & HTMLAttributes<SpSwitch>>; 