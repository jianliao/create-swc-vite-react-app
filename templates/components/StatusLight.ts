import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/status-light/sp-status-light.js';

import { StatusLight as SpStatusLight } from '@spectrum-web-components/status-light';

export const StatusLight = "sp-status-light" as unknown as FC<ReactComponentProps & Omit<Partial<SpStatusLight>, 'style' | 'children'> & HTMLAttributes<SpStatusLight>>; 