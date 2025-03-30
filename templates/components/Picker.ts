import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/picker/sp-picker.js';

import { Picker as SpPicker } from '@spectrum-web-components/picker';

export const Picker = "sp-picker" as unknown as FC<ReactComponentProps & Omit<Partial<SpPicker>, 'style' | 'children'> & HTMLAttributes<SpPicker>>; 