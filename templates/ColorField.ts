import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/color-field/sp-color-field.js';

import { ColorField as SpColorField } from '@spectrum-web-components/color-field';

export const ColorField = "sp-color-field" as unknown as FC<ReactComponentProps & Omit<Partial<SpColorField>, 'style' | 'children'> & HTMLAttributes<SpColorField>>; 