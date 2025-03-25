import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/infield-button/sp-infield-button.js';

import { InfieldButton as SpInfieldButton } from '@spectrum-web-components/infield-button';

export const InfieldButton = "sp-infield-button" as unknown as FC<ReactComponentProps & Omit<Partial<SpInfieldButton>, 'style' | 'children'> & HTMLAttributes<SpInfieldButton>>; 