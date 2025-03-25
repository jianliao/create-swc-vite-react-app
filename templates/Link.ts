import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/link/sp-link.js';

import { Link as SpLink } from '@spectrum-web-components/link';

export const Link = "sp-link" as unknown as FC<ReactComponentProps & Omit<Partial<SpLink>, 'style' | 'children'> & HTMLAttributes<SpLink>>; 