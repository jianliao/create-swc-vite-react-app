import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/truncated/sp-truncated.js';

import { Truncated as SpTruncated } from '@spectrum-web-components/truncated';

export const Truncated = "sp-truncated" as unknown as FC<ReactComponentProps & Omit<Partial<SpTruncated>, 'style' | 'children'> & HTMLAttributes<SpTruncated>>; 