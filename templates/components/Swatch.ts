import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/swatch/sp-swatch.js';

import { Swatch as SpSwatch } from '@spectrum-web-components/swatch';

export const Swatch = "sp-swatch" as unknown as FC<ReactComponentProps & Omit<Partial<SpSwatch>, 'style' | 'children'> & HTMLAttributes<SpSwatch>>; 