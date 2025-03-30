import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/color-area/sp-color-area.js';

import { ColorArea as SpColorArea } from '@spectrum-web-components/color-area';

export const ColorArea = "sp-color-area" as unknown as FC<ReactComponentProps & Omit<Partial<SpColorArea>, 'style' | 'children'> & HTMLAttributes<SpColorArea>>; 