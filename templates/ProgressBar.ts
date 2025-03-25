import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/progress-bar/sp-progress-bar.js';

import { ProgressBar as SpProgressBar } from '@spectrum-web-components/progress-bar';

export const ProgressBar = "sp-progress-bar" as unknown as FC<ReactComponentProps & Omit<Partial<SpProgressBar>, 'style' | 'children'> & HTMLAttributes<SpProgressBar>>; 