import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/underlay/sp-underlay.js';

import { Underlay as SpUnderlay } from '@spectrum-web-components/underlay';

export const Underlay = "sp-underlay" as unknown as FC<ReactComponentProps & Omit<Partial<SpUnderlay>, 'style' | 'children'> & HTMLAttributes<SpUnderlay>>; 