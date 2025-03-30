import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/color-handle/sp-color-handle.js';

import { ColorHandle as SpColorHandle } from '@spectrum-web-components/color-handle';

export const ColorHandle = "sp-color-handle" as unknown as FC<ReactComponentProps & Omit<Partial<SpColorHandle>, 'style' | 'children'> & HTMLAttributes<SpColorHandle>>; 