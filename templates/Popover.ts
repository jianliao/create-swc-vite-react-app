import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/popover/sp-popover.js';

import { Popover as SpPopover } from '@spectrum-web-components/popover';

export const Popover = "sp-popover" as unknown as FC<ReactComponentProps & Omit<Partial<SpPopover>, 'style' | 'children'> & HTMLAttributes<SpPopover>>; 