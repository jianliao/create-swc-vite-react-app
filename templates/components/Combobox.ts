import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/combobox/sp-combobox.js';

import { Combobox as SpCombobox } from '@spectrum-web-components/combobox';

export const Combobox = "sp-combobox" as unknown as FC<ReactComponentProps & Omit<Partial<SpCombobox>, 'style' | 'children'> & HTMLAttributes<SpCombobox>>; 