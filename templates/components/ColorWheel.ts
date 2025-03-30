import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/color-wheel/sp-color-wheel.js';

import { ColorWheel as SpColorWheel } from '@spectrum-web-components/color-wheel';

export const ColorWheel = "sp-color-wheel" as unknown as FC<ReactComponentProps & Omit<Partial<SpColorWheel>, 'style' | 'children'> & HTMLAttributes<SpColorWheel>>; 