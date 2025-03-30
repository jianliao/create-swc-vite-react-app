import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/divider/sp-divider.js';

import { Divider as SpDivider } from '@spectrum-web-components/divider';

export const Divider = "sp-divider" as unknown as FC<ReactComponentProps & Omit<Partial<SpDivider>, 'style' | 'children'> & HTMLAttributes<SpDivider>>; 