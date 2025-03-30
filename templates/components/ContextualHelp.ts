import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/contextual-help/sp-contextual-help.js';

import { ContextualHelp as SpContextualHelp } from '@spectrum-web-components/contextual-help';

export const ContextualHelp = "sp-contextual-help" as unknown as FC<ReactComponentProps & Omit<Partial<SpContextualHelp>, 'style' | 'children'> & HTMLAttributes<SpContextualHelp>>; 