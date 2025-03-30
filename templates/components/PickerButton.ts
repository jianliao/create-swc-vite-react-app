import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/picker-button/sp-picker-button.js';

import { PickerButton as SpPickerButton } from '@spectrum-web-components/picker-button';

export const PickerButton = "sp-picker-button" as unknown as FC<ReactComponentProps & Omit<Partial<SpPickerButton>, 'style' | 'children'> & HTMLAttributes<SpPickerButton>>; 