import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/radio/sp-radio.js';
import '@spectrum-web-components/radio/sp-radio-group.js';

import { Radio as SpRadio, RadioGroup as SpRadioGroup } from '@spectrum-web-components/radio';

export const Radio = "sp-radio" as unknown as FC<ReactComponentProps & Omit<Partial<SpRadio>, 'style' | 'children'> & HTMLAttributes<SpRadio>>;
export const RadioGroup = "sp-radio-group" as unknown as FC<ReactComponentProps & Omit<Partial<SpRadioGroup>, 'style' | 'children'> & HTMLAttributes<SpRadioGroup>>; 