import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/number-field/sp-number-field.js';

import { NumberField as SpNumberField } from '@spectrum-web-components/number-field';

export const NumberField = "sp-number-field" as unknown as FC<ReactComponentProps & Omit<Partial<SpNumberField>, 'style' | 'children'> & HTMLAttributes<SpNumberField>>; 