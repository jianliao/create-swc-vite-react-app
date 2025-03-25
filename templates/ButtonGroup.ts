import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/button-group/sp-button-group.js';

import { ButtonGroup as SpButtonGroup } from '@spectrum-web-components/button-group';

export const ButtonGroup = "sp-button-group" as unknown as FC<ReactComponentProps & Omit<Partial<SpButtonGroup>, 'style' | 'children'> & HTMLAttributes<SpButtonGroup>>; 