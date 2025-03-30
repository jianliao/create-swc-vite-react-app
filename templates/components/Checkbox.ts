import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/checkbox/sp-checkbox.js';

import { Checkbox as SpCheckbox } from '@spectrum-web-components/checkbox';

export const Checkbox = "sp-checkbox" as unknown as FC<ReactComponentProps & Omit<Partial<SpCheckbox>, 'style' | 'children'> & HTMLAttributes<SpCheckbox>>;
