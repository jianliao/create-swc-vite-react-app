import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/progress-circle/sp-progress-circle.js';

import { ProgressCircle as SpProgressCircle } from '@spectrum-web-components/progress-circle';

export const ProgressCircle = "sp-progress-circle" as unknown as FC<ReactComponentProps & Omit<Partial<SpProgressCircle>, 'style' | 'children'> & HTMLAttributes<SpProgressCircle>>; 