import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/card/sp-card.js';

import { Card as SpCard } from '@spectrum-web-components/card';

export const Card = "sp-card" as unknown as FC<ReactComponentProps & Omit<Partial<SpCard>, 'style' | 'children'> & HTMLAttributes<SpCard>>; 