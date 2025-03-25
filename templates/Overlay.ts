import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/overlay/sp-overlay.js';

import { Overlay as SpOverlay } from '@spectrum-web-components/overlay';

export const Overlay = "sp-overlay" as unknown as FC<ReactComponentProps & Omit<Partial<SpOverlay>, 'style' | 'children'> & HTMLAttributes<SpOverlay>>; 