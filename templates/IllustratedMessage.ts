import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/illustrated-message/sp-illustrated-message.js';

import { IllustratedMessage as SpIllustratedMessage } from '@spectrum-web-components/illustrated-message';

export const IllustratedMessage = "sp-illustrated-message" as unknown as FC<ReactComponentProps & Omit<Partial<SpIllustratedMessage>, 'style' | 'children'> & HTMLAttributes<SpIllustratedMessage>>; 