import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/textfield/sp-textfield.js';

import { Textfield as SpTextfield} from '@spectrum-web-components/textfield';

export const Textfield = "sp-textfield" as unknown as FC<ReactComponentProps & Omit<Partial<SpTextfield>, 'style' | 'children'> & HTMLAttributes<SpTextfield>>; 