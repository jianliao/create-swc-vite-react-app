import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/help-text/sp-help-text.js';

import { HelpText as SpHelpText } from '@spectrum-web-components/help-text';

export const HelpText = "sp-help-text" as unknown as FC<ReactComponentProps & Omit<Partial<SpHelpText>, 'style' | 'children'> & HTMLAttributes<SpHelpText>>; 