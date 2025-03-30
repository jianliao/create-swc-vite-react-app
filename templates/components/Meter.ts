import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/meter/sp-meter.js';

import { Meter as SpMeter } from '@spectrum-web-components/meter';

export const Meter = "sp-meter" as unknown as FC<ReactComponentProps & Omit<Partial<SpMeter>, 'style' | 'children'> & HTMLAttributes<SpMeter>>; 