import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/slider/sp-slider.js';
import '@spectrum-web-components/slider/sp-slider-handle.js';

import { Slider as SpSlider, SliderHandle as SpSliderHandle } from '@spectrum-web-components/slider';

export const Slider = "sp-slider" as unknown as FC<ReactComponentProps & Omit<Partial<SpSlider>, 'style' | 'children'> & HTMLAttributes<SpSlider>>;
export const SliderHandle = "sp-slider-handle" as unknown as FC<ReactComponentProps & Omit<Partial<SpSliderHandle>, 'style' | 'children'> & HTMLAttributes<SpSliderHandle>>; 