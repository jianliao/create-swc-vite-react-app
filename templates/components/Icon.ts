import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/icon/sp-icon.js';

import { Icon as SpIcon } from '@spectrum-web-components/icon';

export const Icon = "sp-icon" as unknown as FC<ReactComponentProps & Omit<Partial<SpIcon>, 'style' | 'children'> & HTMLAttributes<SpIcon>>;
