import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/color-slider/sp-color-slider.js';

import { ColorSlider as SpColorSlider } from '@spectrum-web-components/color-slider';

export const ColorSlider = "sp-color-slider" as unknown as FC<ReactComponentProps & Omit<Partial<SpColorSlider>, 'style' | 'children'> & HTMLAttributes<SpColorSlider>>; 