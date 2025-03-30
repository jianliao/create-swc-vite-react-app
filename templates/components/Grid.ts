import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/grid/sp-grid.js';

import { Grid as SpGrid } from '@spectrum-web-components/grid';

export const Grid = "sp-grid" as unknown as FC<ReactComponentProps & Omit<Partial<SpGrid>, 'style' | 'children'> & HTMLAttributes<SpGrid>>; 