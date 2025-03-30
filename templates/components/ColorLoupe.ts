import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/color-loupe/sp-color-loupe.js';

import { ColorLoupe as SpColorLoupe } from '@spectrum-web-components/color-loupe';

export const ColorLoupe = "sp-color-loupe" as unknown as FC<ReactComponentProps & Omit<Partial<SpColorLoupe>, 'style' | 'children'> & HTMLAttributes<SpColorLoupe>>; 