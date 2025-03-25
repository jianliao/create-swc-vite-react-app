import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/badge/sp-badge.js';

import { Badge as SpBadge } from '@spectrum-web-components/badge';

export const Badge = "sp-badge" as unknown as FC<ReactComponentProps & Omit<Partial<SpBadge>, 'style' | 'children'> & HTMLAttributes<SpBadge>>; 